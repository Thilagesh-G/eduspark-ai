import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, ChevronRight, ChevronLeft, Flag, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

  const questions = [
    {
      id: 1,
      type: "mcq",
      question: "What is the value of x in the equation 2x + 5 = 13?",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      subject: "Mathematics",
      topic: "Algebra",
      difficulty: "Medium",
      marks: 2,
    },
    {
      id: 2,
      type: "mcq",
      question: "Which of the following is NOT a renewable source of energy?",
      options: ["Solar Energy", "Wind Energy", "Coal", "Hydroelectric Power"],
      subject: "Science",
      topic: "Energy Resources",
      difficulty: "Easy",
      marks: 1,
    },
    {
      id: 3,
      type: "short",
      question: "Explain the process of photosynthesis in plants in 50-100 words.",
      subject: "Science",
      topic: "Biology",
      difficulty: "Medium",
      marks: 3,
    },
    {
      id: 4,
      type: "mcq",
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      subject: "Social Studies",
      topic: "Geography",
      difficulty: "Easy",
      marks: 1,
    },
  ];

  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    navigate("/feedback");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-accent-light/10 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <Card className="p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                {currentQ.subject} Assessment
              </h1>
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/30">
                  {currentQ.topic}
                </Badge>
                <Badge
                  className={
                    currentQ.difficulty === "Easy"
                      ? "bg-success/10 text-success border-success/30"
                      : currentQ.difficulty === "Medium"
                      ? "bg-warning/10 text-warning border-warning/30"
                      : "bg-destructive/10 text-destructive border-destructive/30"
                  }
                >
                  {currentQ.difficulty}
                </Badge>
                <span className="text-sm text-muted-foreground">{currentQ.marks} marks</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-2xl font-bold text-foreground mb-1">
                <Clock className="h-6 w-6 text-primary" />
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-muted-foreground">Time Remaining</p>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </Card>

        {/* Question Card */}
        <Card className="p-8 shadow-lg min-h-[400px] flex flex-col">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
              {currentQuestion + 1}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                {currentQ.question}
              </h2>

              {currentQ.type === "mcq" ? (
                <RadioGroup
                  value={answers[currentQ.id]}
                  onValueChange={(value) =>
                    setAnswers({ ...answers, [currentQ.id]: value })
                  }
                  className="space-y-4"
                >
                  {currentQ.options?.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-3">
                  <Label htmlFor="answer" className="text-sm text-muted-foreground">
                    Write your answer below (50-100 words)
                  </Label>
                  <Textarea
                    id="answer"
                    placeholder="Type your answer here..."
                    className="min-h-[200px] text-base resize-none"
                    value={answers[currentQ.id] || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, [currentQ.id]: e.target.value })
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    {answers[currentQ.id]?.split(" ").length || 0} words
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button variant="ghost" size="sm" className="gap-2 text-warning">
              <Flag className="h-4 w-4" />
              Flag for Review
            </Button>

            {currentQuestion === totalQuestions - 1 ? (
              <Button onClick={handleSubmit} className="gap-2 bg-success hover:bg-success/90">
                <CheckCircle2 className="h-4 w-4" />
                Submit Assessment
              </Button>
            ) : (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>

        {/* Question Navigator */}
        <Card className="p-6 shadow-lg">
          <h3 className="text-sm font-semibold text-foreground mb-4">Question Navigator</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`h-10 w-10 rounded-lg font-medium text-sm transition-all ${
                  index === currentQuestion
                    ? "bg-primary text-primary-foreground shadow-md scale-110"
                    : answers[questions[index].id]
                    ? "bg-success/20 text-success border-2 border-success"
                    : "bg-muted hover:bg-muted/70 text-muted-foreground"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-success/20 border-2 border-success"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-primary"></div>
              <span>Current</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-muted"></div>
              <span>Not Visited</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;