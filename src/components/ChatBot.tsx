import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  quickReplies?: string[];
}

const FAQ_DATA: Record<string, { answer: string; followUp?: string[] }> = {
  "Welche Bereiche können behandelt werden?": {
    answer: "Wir behandeln alle Körperbereiche: Rücken, Brust, Intimbereich, Bart, Beine, Arme und mehr. Jede Zone wird individuell auf deinen Hauttyp abgestimmt.",
    followUp: ["Was kostet eine Behandlung?", "Tut Lasern weh?", "Wie viele Sitzungen brauche ich?"],
  },
  "Was kostet eine Behandlung?": {
    answer: "Die Preise variieren je nach Körperzone. Eine Einzelsitzung startet ab CHF 89. Wir bieten auch attraktive Pakete an. Kontaktiere uns für ein individuelles Angebot.",
    followUp: ["Gibt es Paketpreise?", "Wie buche ich einen Termin?", "Kostenlose Beratung?"],
  },
  "Tut Lasern weh?": {
    answer: "Die meisten Kunden beschreiben es als leichtes Zwicken – vergleichbar mit einem Gummiband auf der Haut. Unser modernes Gerät hat ein integriertes Kühlsystem, das den Komfort deutlich erhöht.",
    followUp: ["Welche Technologie nutzt ihr?", "Wie viele Sitzungen brauche ich?", "Wie buche ich einen Termin?"],
  },
  "Wie viele Sitzungen brauche ich?": {
    answer: "In der Regel sind 6–8 Sitzungen nötig, um dauerhafte Ergebnisse zu erzielen. Der genaue Umfang hängt von Haartyp, Hautton und Körperzone ab.",
    followUp: ["Was kostet eine Behandlung?", "Gibt es Paketpreise?", "Kostenlose Beratung?"],
  },
  "Wie buche ich einen Termin?": {
    answer: "Du kannst uns direkt per WhatsApp kontaktieren oder das Kontaktformular auf unserer Seite nutzen. Wir melden uns innerhalb von 24 Stunden bei dir.",
    followUp: ["Wo befindet sich die Klinik?", "Kostenlose Beratung?", "Was kostet eine Behandlung?"],
  },
  "Welche Technologie nutzt ihr?": {
    answer: "Wir arbeiten mit modernster Diodenlaser-Technologie, die für alle Hauttypen geeignet ist. Das Gerät kombiniert mehrere Wellenlängen für maximale Effektivität und Sicherheit.",
    followUp: ["Tut Lasern weh?", "Ist Lasern sicher?", "Wie viele Sitzungen brauche ich?"],
  },
  "Ist Lasern sicher?": {
    answer: "Ja, Laser-Haarentfernung ist eine bewährte und sichere Methode. Unsere Fachspezialisten sind zertifiziert und das Gerät ist medizinisch zugelassen. Nebenwirkungen sind minimal – leichte Rötungen klingen innert Stunden ab.",
    followUp: ["Welche Technologie nutzt ihr?", "Tut Lasern weh?", "Kostenlose Beratung?"],
  },
  "Gibt es Paketpreise?": {
    answer: "Ja! Wir bieten 6er- und 8er-Pakete mit bis zu 30% Rabatt an. Je grösser das Paket, desto günstiger wird die einzelne Sitzung. Frag uns nach deinem individuellen Angebot.",
    followUp: ["Was kostet eine Behandlung?", "Wie buche ich einen Termin?", "Welche Bereiche können behandelt werden?"],
  },
  "Wo befindet sich die Klinik?": {
    answer: "Unsere Klinik befindet sich zentral in Luzern, gut erreichbar mit ÖV und Auto. Parkplätze sind in der Nähe verfügbar. Wir bedienen auch Kunden aus Zürich und der ganzen Zentralschweiz.",
    followUp: ["Wie buche ich einen Termin?", "Kostenlose Beratung?", "Was kostet eine Behandlung?"],
  },
  "Kostenlose Beratung?": {
    answer: "Ja, wir bieten eine kostenlose und unverbindliche Erstberatung an. Dabei analysieren wir deinen Hauttyp, besprechen deine Wünsche und erstellen einen individuellen Behandlungsplan.",
    followUp: ["Wie buche ich einen Termin?", "Was kostet eine Behandlung?", "Welche Bereiche können behandelt werden?"],
  },
};

const INITIAL_QUICK_REPLIES = [
  "Welche Bereiche können behandelt werden?",
  "Was kostet eine Behandlung?",
  "Tut Lasern weh?",
  "Wie viele Sitzungen brauche ich?",
  "Kostenlose Beratung?",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let msgId = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          id: msgId.current++,
          text: "Hallo! 👋 Willkommen bei Laser Clinic Luzern. Wie kann ich dir helfen?",
          isBot: true,
          quickReplies: INITIAL_QUICK_REPLIES,
        },
      ]);
    }
  };

  const addBotResponse = (answer: string, followUp?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: msgId.current++,
          text: answer,
          isBot: true,
          quickReplies: followUp,
        },
      ]);
    }, 600 + Math.random() * 400);
  };

  const handleQuickReply = (question: string) => {
    setMessages((prev) => [
      ...prev,
      { id: msgId.current++, text: question, isBot: false },
    ]);

    const faq = FAQ_DATA[question];
    if (faq) {
      addBotResponse(faq.answer, faq.followUp);
    }
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { id: msgId.current++, text, isBot: false },
    ]);
    setInputValue("");

    // Try to match input to FAQ
    const lowerText = text.toLowerCase();
    const match = Object.entries(FAQ_DATA).find(([key]) => {
      const keywords = key.toLowerCase().split(" ");
      return keywords.filter((w) => w.length > 3).some((w) => lowerText.includes(w));
    });

    if (match) {
      addBotResponse(match[1].answer, match[1].followUp);
    } else {
      addBotResponse(
        "Danke für deine Frage! Für eine individuelle Beratung kontaktiere uns am besten direkt per WhatsApp oder nutze unser Kontaktformular. Wir helfen dir gerne weiter! 💬",
        ["Wie buche ich einen Termin?", "Kostenlose Beratung?", "Was kostet eine Behandlung?"]
      );
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openChat}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-dark)))",
            }}
            aria-label="Chat öffnen"
          >
            <MessageCircle className="w-6 h-6 text-black" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "hsl(var(--gold))" }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] h-[500px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-border/30"
            style={{ background: "hsl(var(--background))" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold) / 0.15), hsl(var(--gold-dark) / 0.1))",
                borderBottom: "1px solid hsl(var(--gold) / 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-black"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-dark)))" }}
                >
                  LCL
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Laser Clinic Luzern</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                        msg.isBot
                          ? "rounded-2xl rounded-tl-sm bg-muted/60 text-foreground"
                          : "rounded-2xl rounded-tr-sm text-black font-medium"
                      }`}
                      style={
                        !msg.isBot
                          ? { background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-dark)))" }
                          : undefined
                      }
                    >
                      {msg.text}
                    </div>
                  </motion.div>

                  {/* Quick Replies */}
                  {msg.isBot && msg.quickReplies && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-1.5 mt-2 ml-1"
                    >
                      {msg.quickReplies.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleQuickReply(q)}
                          className="text-xs px-3 py-1.5 rounded-full border transition-all hover:scale-[1.03] flex items-center gap-1"
                          style={{
                            borderColor: "hsl(var(--gold) / 0.4)",
                            color: "hsl(var(--gold))",
                          }}
                        >
                          {q}
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted/60 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="px-4 py-3 shrink-0"
              style={{ borderTop: "1px solid hsl(var(--gold) / 0.15)" }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Deine Frage..."
                  className="flex-1 bg-muted/40 border-none rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[hsl(var(--gold)/0.5)]"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                  style={{
                    background: inputValue.trim()
                      ? "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-dark)))"
                      : "hsl(var(--muted))",
                  }}
                >
                  <Send className="w-4 h-4 text-black" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
