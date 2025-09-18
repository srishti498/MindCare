import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Calendar,
  TrendingUp,
  Heart,
  Brain,
  Sun,
  Cloud,
  CloudRain,
  Zap,
  Moon
} from "lucide-react";

interface MoodEntry {
  id: string;
  date: string;
  mood: number;
  emotions: string[];
  notes: string;
  timestamp: number;
}

const MoodTracker = () => {
  const { toast } = useToast();
  const [currentMood, setCurrentMood] = useState<number>(3);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([]);

  // Load mood history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mindcare-mood-history');
    if (saved) {
      setMoodHistory(JSON.parse(saved));
    }
  }, []);

  // Save mood history to localStorage
  useEffect(() => {
    localStorage.setItem('mindcare-mood-history', JSON.stringify(moodHistory));
  }, [moodHistory]);

  const moodLevels = [
    { value: 1, emoji: "😢", label: "Very Low", color: "text-red-500", bg: "bg-red-50 border-red-200" },
    { value: 2, emoji: "😔", label: "Low", color: "text-orange-500", bg: "bg-orange-50 border-orange-200" },
    { value: 3, emoji: "😐", label: "Neutral", color: "text-yellow-500", bg: "bg-yellow-50 border-yellow-200" },
    { value: 4, emoji: "😊", label: "Good", color: "text-green-500", bg: "bg-green-50 border-green-200" },
    { value: 5, emoji: "😄", label: "Excellent", color: "text-blue-500", bg: "bg-blue-50 border-blue-200" },
  ];

  const emotions = [
    { name: "Happy", icon: "😊", color: "bg-yellow-100 text-yellow-700" },
    { name: "Sad", icon: "😢", color: "bg-blue-100 text-blue-700" },
    { name: "Anxious", icon: "😰", color: "bg-orange-100 text-orange-700" },
    { name: "Excited", icon: "🤩", color: "bg-purple-100 text-purple-700" },
    { name: "Angry", icon: "😠", color: "bg-red-100 text-red-700" },
    { name: "Peaceful", icon: "😌", color: "bg-green-100 text-green-700" },
    { name: "Overwhelmed", icon: "🤯", color: "bg-gray-100 text-gray-700" },
    { name: "Grateful", icon: "🙏", color: "bg-pink-100 text-pink-700" },
    { name: "Tired", icon: "😴", color: "bg-indigo-100 text-indigo-700" },
    { name: "Motivated", icon: "💪", color: "bg-emerald-100 text-emerald-700" },
  ];

  const handleEmotionToggle = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleSaveMood = () => {
    if (!currentMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today before saving.",
        variant: "destructive"
      });
      return;
    }

    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      mood: currentMood,
      emotions: selectedEmotions,
      notes: notes.trim(),
      timestamp: Date.now()
    };

    setMoodHistory(prev => [newEntry, ...prev.slice(0, 29)]); // Keep last 30 entries
    
    // Reset form
    setCurrentMood(3);
    setSelectedEmotions([]);
    setNotes("");

    toast({
      title: "Mood logged successfully!",
      description: "Your mood entry has been saved to your personal journal.",
    });
  };

  const getWeeklyAverage = () => {
    const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentEntries = moodHistory.filter(entry => entry.timestamp > weekAgo);
    if (recentEntries.length === 0) return 0;
    
    const sum = recentEntries.reduce((acc, entry) => acc + entry.mood, 0);
    return (sum / recentEntries.length).toFixed(1);
  };

  const getMoodTrend = () => {
    if (moodHistory.length < 2) return "neutral";
    
    const recent = moodHistory.slice(0, 3);
    const older = moodHistory.slice(3, 6);
    
    if (recent.length === 0 || older.length === 0) return "neutral";
    
    const recentAvg = recent.reduce((acc, entry) => acc + entry.mood, 0) / recent.length;
    const olderAvg = older.reduce((acc, entry) => acc + entry.mood, 0) / older.length;
    
    if (recentAvg > olderAvg + 0.3) return "improving";
    if (recentAvg < olderAvg - 0.3) return "declining";
    return "stable";
  };

  const trendInfo = {
    improving: { icon: TrendingUp, text: "Trending upward", color: "text-green-600" },
    declining: { icon: TrendingUp, text: "Needs attention", color: "text-red-600" },
    stable: { icon: Heart, text: "Staying stable", color: "text-blue-600" }
  };

  const currentTrend = getMoodTrend();
  const TrendIcon = trendInfo[currentTrend].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mood & Journal Tracker
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your emotional well-being daily to gain insights into your mental health patterns and progress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mood Entry Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Selection */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  How are you feeling today?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                  {moodLevels.map((mood) => (
                    <div
                      key={mood.value}
                      onClick={() => setCurrentMood(mood.value)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center hover:scale-105 ${
                        currentMood === mood.value 
                          ? `${mood.bg} border-current transform scale-105` 
                          : 'bg-muted/30 border-transparent hover:bg-muted/50'
                      }`}
                    >
                      <div className="text-4xl mb-2">{mood.emoji}</div>
                      <div className={`font-medium ${currentMood === mood.value ? mood.color : 'text-muted-foreground'}`}>
                        {mood.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emotion Selection */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-secondary" />
                  What emotions are you experiencing?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {emotions.map((emotion) => (
                    <Button
                      key={emotion.name}
                      variant={selectedEmotions.includes(emotion.name) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleEmotionToggle(emotion.name)}
                      className={`justify-start ${
                        selectedEmotions.includes(emotion.name) 
                          ? 'bg-primary text-primary-foreground' 
                          : `${emotion.color} border-current`
                      }`}
                    >
                      <span className="mr-2">{emotion.icon}</span>
                      {emotion.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Journal Notes */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-accent" />
                  Journal Entry (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What's on your mind today? Reflect on your day, thoughts, or anything you'd like to remember..."
                  rows={6}
                  className="resize-none"
                />
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleSaveMood} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Save Mood Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Analytics & History */}
          <div className="space-y-6">
            {/* Weekly Summary */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Weekly Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {getWeeklyAverage() || "N/A"}
                    </div>
                    <p className="text-sm text-muted-foreground">Average mood this week</p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <TrendIcon className={`w-4 h-4 ${trendInfo[currentTrend].color}`} />
                    <span className={`text-sm font-medium ${trendInfo[currentTrend].color}`}>
                      {trendInfo[currentTrend].text}
                    </span>
                  </div>
                  
                  <div className="text-center pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      {moodHistory.length} total entries logged
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Insights */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Quick Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {moodHistory.length > 0 ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Sun className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">Last entry: {moodHistory[0]?.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Moon className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm">
                          Most common emotion: {
                            moodHistory
                              .flatMap(entry => entry.emotions)
                              .reduce((acc, emotion) => {
                                acc[emotion] = (acc[emotion] || 0) + 1;
                                return acc;
                              }, {} as Record<string, number>)
                              ? Object.entries(
                                  moodHistory
                                    .flatMap(entry => entry.emotions)
                                    .reduce((acc, emotion) => {
                                      acc[emotion] = (acc[emotion] || 0) + 1;
                                      return acc;
                                    }, {} as Record<string, number>)
                                ).sort(([, a], [, b]) => b - a)[0]?.[0] || "None"
                              : "None"
                          }
                        </span>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Start logging your moods to see personalized insights!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Recent Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {moodHistory.slice(0, 5).map((entry) => {
                    const moodData = moodLevels.find(m => m.value === entry.mood);
                    return (
                      <div key={entry.id} className="p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{entry.date}</span>
                          <span className="text-2xl">{moodData?.emoji}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {entry.emotions.slice(0, 3).map((emotion) => (
                            <Badge key={emotion} variant="outline" className="text-xs">
                              {emotion}
                            </Badge>
                          ))}
                        </div>
                        {entry.notes && (
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {entry.notes}
                          </p>
                        )}
                      </div>
                    );
                  })}
                  
                  {moodHistory.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No mood entries yet. Start tracking your mood above!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;