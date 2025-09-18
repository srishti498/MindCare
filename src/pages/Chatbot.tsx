import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Bot, 
  User, 
  Heart, 
  AlertCircle,
  Lightbulb,
  Phone,
  RefreshCw
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'suggestion' | 'crisis' | 'normal';
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm MindCare AI, your personal mental health companion. I'm here to listen and provide support. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI responses
  const generateResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Crisis detection keywords
    const crisisKeywords = ['suicide', 'kill myself', 'end my life', 'hurt myself', 'die', 'hopeless'];
    const isCrisis = crisisKeywords.some(keyword => lowerMessage.includes(keyword));
    
    if (isCrisis) {
      return {
        id: Date.now(),
        text: "I'm really concerned about what you're sharing. Your life has value and there are people who want to help. Please reach out to our 24/7 crisis line at 1-800-MINDCARE or text HOME to 741741. Would you like me to help you connect with a crisis counselor right now?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'crisis'
      };
    }

    // Anxiety-related responses
    if (lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('stress')) {
      return {
        id: Date.now(),
        text: "I understand you're feeling anxious. Let's try a quick grounding technique: Can you name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste? This can help bring you back to the present moment.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'suggestion'
      };
    }

    // Depression-related responses
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return {
        id: Date.now(),
        text: "I hear that you're feeling sad. Those feelings are valid and it's okay to experience them. Sometimes when we're feeling down, small actions can help - like taking a short walk, listening to music, or reaching out to a friend. What usually helps you feel a bit better?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'suggestion'
      };
    }

    // Academic stress responses
    if (lowerMessage.includes('exam') || lowerMessage.includes('study') || lowerMessage.includes('academic') || lowerMessage.includes('school')) {
      return {
        id: Date.now(),
        text: "Academic pressure can be overwhelming. Remember that your worth isn't determined by grades alone. Let's break this down - what specific aspect of your studies is causing you the most stress? I can help you develop some coping strategies.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'suggestion'
      };
    }

    // General positive responses
    const positiveResponses = [
      "Thank you for sharing that with me. Your feelings are important and valid. How would you like to explore this further?",
      "I appreciate you opening up. It takes courage to talk about how we're feeling. What's been on your mind lately?",
      "That sounds challenging. Remember, you don't have to face this alone. What kind of support would be most helpful for you right now?",
      "I'm here to listen and support you. Sometimes just talking about our feelings can help us process them better. Tell me more about what you're experiencing."
    ];

    return {
      id: Date.now(),
      text: positiveResponses[Math.floor(Math.random() * positiveResponses.length)],
      sender: 'bot',
      timestamp: new Date(),
      type: 'normal'
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse = generateResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickResponses = [
    "I'm feeling anxious",
    "I'm struggling with studies", 
    "I feel overwhelmed",
    "I'm having trouble sleeping"
  ];

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm MindCare AI, your personal mental health companion. I'm here to listen and provide support. How are you feeling today?",
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Mental Health Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Chat with our AI-powered mental health assistant for immediate support, coping strategies, and guidance.
          </p>
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This AI assistant provides support and resources but is not a replacement for professional medical advice. 
                In case of emergency, please call 911 or our crisis line.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">MindCare AI Assistant</CardTitle>
                      <p className="text-sm text-muted-foreground">Online • Responding instantly</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={resetChat}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset Chat
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                      message.sender === 'user' ? 'order-1' : 'order-2'
                    }`}>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : message.type === 'crisis'
                          ? 'bg-destructive/10 border border-destructive/20 text-foreground'
                          : message.type === 'suggestion' 
                          ? 'bg-secondary/10 border border-secondary/20 text-foreground'
                          : 'bg-muted text-foreground'
                      }`}>
                        {message.type === 'crisis' && (
                          <div className="flex items-center space-x-2 mb-2">
                            <AlertCircle className="w-4 h-4 text-destructive" />
                            <Badge variant="destructive" className="text-xs">Crisis Support</Badge>
                          </div>
                        )}
                        {message.type === 'suggestion' && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-secondary" />
                            <Badge variant="secondary" className="text-xs">Coping Strategy</Badge>
                          </div>
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Responses */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Quick Responses</CardTitle>
                <p className="text-sm text-muted-foreground">Tap to quickly share common feelings</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickResponses.map((response, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start"
                      onClick={() => handleQuickResponse(response)}
                    >
                      {response}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Crisis Resources */}
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-destructive">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Crisis Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="destructive" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Crisis Hotline
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Available 24/7 for immediate support during mental health crises.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">AI Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Empathetic responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-secondary" />
                    <span>CBT-based techniques</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                    <span>Crisis detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-accent" />
                    <span>24/7 availability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;