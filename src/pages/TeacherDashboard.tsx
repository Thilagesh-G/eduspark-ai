import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, TrendingUp, AlertTriangle, BookOpen, Download, FileText } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const TeacherDashboard = () => {
  const classOverview = {
    totalStudents: 45,
    averageScore: 78,
    assessmentsCompleted: 34,
    studentsNeedingHelp: 8,
  };

  const performanceData = [
    { month: "Aug", avgScore: 72, completion: 85 },
    { month: "Sep", avgScore: 75, completion: 88 },
    { month: "Oct", avgScore: 76, completion: 90 },
    { month: "Nov", avgScore: 78, completion: 92 },
    { month: "Dec", avgScore: 78, completion: 94 },
  ];

  const subjectPerformance = [
    { subject: "Mathematics", average: 75, atRisk: 5 },
    { subject: "Science", average: 82, atRisk: 3 },
    { subject: "English", average: 78, atRisk: 6 },
    { subject: "Social Studies", average: 80, atRisk: 4 },
  ];

  const recentStudents = [
    { name: "Priya Sharma", lastScore: 85, trend: "up", avgScore: 82, weakArea: "Quadratic Equations" },
    { name: "Rahul Patel", lastScore: 72, trend: "down", avgScore: 78, weakArea: "Photosynthesis" },
    { name: "Ananya Gupta", lastScore: 92, trend: "up", avgScore: 89, weakArea: "Grammar" },
    { name: "Arjun Singh", lastScore: 68, trend: "down", avgScore: 72, weakArea: "Motion & Force" },
    { name: "Sneha Reddy", lastScore: 88, trend: "stable", avgScore: 86, weakArea: "Algebra" },
  ];

  const topicInsights = [
    { topic: "Quadratic Equations", avgScore: 68, studentsStruggling: 12, curriculum: "CBSE Class 10 - Chapter 4" },
    { topic: "Photosynthesis", avgScore: 72, studentsStruggling: 8, curriculum: "CBSE Class 10 - Biology" },
    { topic: "Sentence Structure", avgScore: 75, studentsStruggling: 10, curriculum: "CBSE Class 10 - English Grammar" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-accent-light/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">
              Teacher <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Class 10-A Overview & Analytics</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button className="gap-2">
              <FileText className="h-4 w-4" />
              Create Assessment
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="stat-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                <h3 className="text-3xl font-bold text-primary">{classOverview.totalStudents}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Active learners</p>
          </Card>

          <Card className="stat-card bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                <h3 className="text-3xl font-bold text-success">{classOverview.averageScore}%</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
            <p className="text-xs text-success mt-2">↑ 3% from last month</p>
          </Card>

          <Card className="stat-card bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Assessments</p>
                <h3 className="text-3xl font-bold text-secondary">{classOverview.assessmentsCompleted}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Completed this month</p>
          </Card>

          <Card className="stat-card bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Need Support</p>
                <h3 className="text-3xl font-bold text-warning">{classOverview.studentsNeedingHelp}</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Attention required</p>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Performance Trends */}
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-display font-semibold mb-6">Class Performance Trends</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="avgScore" stroke="hsl(var(--primary))" strokeWidth={3} name="Avg Score %" />
                  <Line type="monotone" dataKey="completion" stroke="hsl(var(--success))" strokeWidth={3} name="Completion %" />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Subject Performance */}
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-display font-semibold mb-6">Subject-wise Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="average" fill="hsl(var(--primary))" name="Average Score %" />
                  <Bar dataKey="atRisk" fill="hsl(var(--warning))" name="Students At Risk" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-display font-semibold mb-6">Student Performance Overview</h2>
              <div className="space-y-4">
                {recentStudents.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                        {student.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">Weak Area: {student.weakArea}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Last Score</p>
                        <p className="text-xl font-bold text-foreground">{student.lastScore}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Average</p>
                        <p className="text-xl font-bold text-muted-foreground">{student.avgScore}%</p>
                      </div>
                      <Badge
                        className={
                          student.trend === "up"
                            ? "bg-success/10 text-success border-success/30"
                            : student.trend === "down"
                            ? "bg-destructive/10 text-destructive border-destructive/30"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {student.trend === "up" ? "↑" : student.trend === "down" ? "↓" : "→"}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-6">
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-display font-semibold mb-6">Curriculum Mapping & Insights</h2>
              <div className="space-y-4">
                {topicInsights.map((topic, index) => (
                  <div key={index} className="p-5 rounded-lg bg-gradient-to-r from-card to-warning-light/10 border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{topic.topic}</h3>
                        <p className="text-sm text-muted-foreground">{topic.curriculum}</p>
                      </div>
                      <Badge className="bg-warning/10 text-warning border-warning/30">
                        {topic.studentsStruggling} students struggling
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Class Average</span>
                        <span className="font-semibold text-foreground">{topic.avgScore}%</span>
                      </div>
                      <Progress value={topic.avgScore} className="h-2" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="gap-2">
                        <BookOpen className="h-4 w-4" />
                        Assign Practice
                      </Button>
                      <Button variant="outline" size="sm">
                        View Resources
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;