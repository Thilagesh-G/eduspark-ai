import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, TrendingUp, AlertCircle, Play, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const upcomingTests = [
    { id: 1, subject: "Mathematics", topic: "Algebra - Quadratic Equations", date: "2024-01-15", duration: "60 min", difficulty: "Medium" },
    { id: 2, subject: "Science", topic: "Physics - Motion and Force", date: "2024-01-16", duration: "45 min", difficulty: "Easy" },
    { id: 3, subject: "English", topic: "Grammar & Comprehension", date: "2024-01-18", duration: "90 min", difficulty: "Hard" },
  ];

  const weakAreas = [
    { topic: "Quadratic Equations", accuracy: 65, subject: "Mathematics" },
    { topic: "Photosynthesis", accuracy: 72, subject: "Science" },
    { topic: "Sentence Structure", accuracy: 68, subject: "English" },
  ];

  const recentScores = [
    { subject: "Mathematics", score: 85, total: 100 },
    { subject: "Science", score: 92, total: 100 },
    { subject: "English", score: 78, total: 100 },
    { subject: "Social Studies", score: 88, total: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-secondary-light/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">
              Welcome back, <span className="text-gradient">Priya!</span>
            </h1>
            <p className="text-muted-foreground">Here's your learning progress for today</p>
          </div>
          <Link to="/assessment">
            <Button size="lg" className="gap-2 shadow-primary">
              <Play className="h-5 w-5" />
              Start Practice
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="stat-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Overall Score</p>
                <h3 className="text-3xl font-bold text-primary">86%</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="text-xs text-success mt-2">↑ 5% from last week</p>
          </Card>

          <Card className="stat-card bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tests Completed</p>
                <h3 className="text-3xl font-bold text-secondary">24</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">This month</p>
          </Card>

          <Card className="stat-card bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Study Time</p>
                <h3 className="text-3xl font-bold text-success">12.5h</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-success" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">This week</p>
          </Card>

          <Card className="stat-card bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Improvement Areas</p>
                <h3 className="text-3xl font-bold text-warning">3</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/20 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-warning" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Focus needed</p>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Tests */}
          <Card className="lg:col-span-2 p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Upcoming Assessments
              </h2>
            </div>
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {test.subject}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          test.difficulty === "Easy"
                            ? "bg-success/10 text-success border-success/30"
                            : test.difficulty === "Medium"
                            ? "bg-warning/10 text-warning border-warning/30"
                            : "bg-destructive/10 text-destructive border-destructive/30"
                        }
                      >
                        {test.difficulty}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{test.topic}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {test.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {test.duration}
                      </span>
                    </div>
                  </div>
                  <Link to="/assessment">
                    <Button variant="outline" size="sm" className="ml-4">
                      Start
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </Card>

          {/* Weak Areas */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-warning" />
              Focus Areas
            </h2>
            <div className="space-y-6">
              {weakAreas.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{area.topic}</p>
                      <p className="text-xs text-muted-foreground">{area.subject}</p>
                    </div>
                    <span className="text-sm font-semibold text-warning">{area.accuracy}%</span>
                  </div>
                  <Progress value={area.accuracy} className="h-2" />
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs text-primary">
                    Practice more →
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Performance */}
        <Card className="p-6 shadow-lg">
          <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-success" />
            Recent Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentScores.map((score, index) => (
              <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-card to-muted/30 border border-border">
                <p className="text-sm text-muted-foreground mb-2">{score.subject}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-foreground">{score.score}</span>
                  <span className="text-lg text-muted-foreground">/{score.total}</span>
                </div>
                <Progress value={(score.score / score.total) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;