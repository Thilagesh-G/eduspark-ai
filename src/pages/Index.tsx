import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Settings, Sparkles, BookOpen, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary-light/20 to-accent-light/20 py-20 px-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Smart Assessment for
            <br />
            <span className="text-gradient">Indian Curriculum</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in">
            AI-powered platform aligned with CBSE and State Board standards. 
            Instant feedback, personalized learning paths, and comprehensive analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link to="/student-dashboard">
              <Button size="lg" className="gap-2 shadow-primary w-full sm:w-auto">
                <GraduationCap className="h-5 w-5" />
                Student Login
              </Button>
            </Link>
            <Link to="/teacher-dashboard">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Users className="h-5 w-5" />
                Teacher Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient">EduAI</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive features designed for modern education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 card-hover border-primary/20">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Feedback</h3>
              <p className="text-muted-foreground">
                Get instant, detailed explanations with step-by-step solutions for every answer
              </p>
            </Card>

            <Card className="p-6 card-hover border-secondary/20">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curriculum Aligned</h3>
              <p className="text-muted-foreground">
                Questions mapped to CBSE and State Board syllabus for relevant practice
              </p>
            </Card>

            <Card className="p-6 card-hover border-success/20">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
              <p className="text-muted-foreground">
                Track performance, identify weak areas, and monitor improvement over time
              </p>
            </Card>

            <Card className="p-6 card-hover border-accent/20">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Question Types</h3>
              <p className="text-muted-foreground">
                MCQs, short answers, long answers, and mathematical solutions with formula editor
              </p>
            </Card>

            <Card className="p-6 card-hover border-warning/20">
              <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teacher Dashboard</h3>
              <p className="text-muted-foreground">
                Comprehensive analytics, class insights, and automated report generation
              </p>
            </Card>

            <Card className="p-6 card-hover border-primary/20">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Student data protection with secure authentication and encrypted storage
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Built for Everyone
            </h2>
            <p className="text-muted-foreground text-lg">
              Tailored experiences for each user type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-lg card-hover bg-gradient-to-br from-card to-primary-light/10">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Students</h3>
              <ul className="text-muted-foreground space-y-2 text-left mb-6">
                <li>• Take customized assessments</li>
                <li>• Get instant AI feedback</li>
                <li>• Track your progress</li>
                <li>• Identify weak areas</li>
                <li>• Access personalized resources</li>
              </ul>
              <Link to="/student-dashboard">
                <Button className="w-full">Explore Student Portal</Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-lg card-hover bg-gradient-to-br from-card to-secondary-light/10">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Teachers</h3>
              <ul className="text-muted-foreground space-y-2 text-left mb-6">
                <li>• Monitor class performance</li>
                <li>• Identify struggling students</li>
                <li>• Access curriculum insights</li>
                <li>• Auto-generated reports</li>
                <li>• Assign targeted practice</li>
              </ul>
              <Link to="/teacher-dashboard">
                <Button variant="secondary" className="w-full">Explore Teacher Portal</Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-lg card-hover bg-gradient-to-br from-card to-accent-light/10">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Administrators</h3>
              <ul className="text-muted-foreground space-y-2 text-left mb-6">
                <li>• Create assessments</li>
                <li>• Map to curriculum standards</li>
                <li>• Manage question banks</li>
                <li>• Configure AI settings</li>
                <li>• Generate analytics</li>
              </ul>
              <Button variant="outline" className="w-full">Coming Soon</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-glow to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of students and teachers using AI-powered assessments
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/student-dashboard">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                <GraduationCap className="h-5 w-5" />
                Get Started as Student
              </Button>
            </Link>
            <Link to="/teacher-dashboard">
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 hover:bg-white/20 text-white w-full sm:w-auto">
                <Users className="h-5 w-5" />
                Get Started as Teacher
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 EduAI - Smart Assessment Platform</p>
          <p className="text-sm">Aligned with CBSE & State Board Curriculum Standards</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;