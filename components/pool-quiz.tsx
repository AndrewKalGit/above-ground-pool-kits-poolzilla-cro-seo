"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react"
import Link from "next/link"

interface QuizAnswer {
  shape?: string
  size?: string
  swimmers?: string
  maintenance?: string
  budget?: string
}

export function PoolQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: "shape",
      question: "What pool shape do you prefer?",
      options: [
        { value: "round", label: "Round", description: "Classic design, efficient use of space" },
        { value: "oval", label: "Oval", description: "More swim space, elegant look" },
        { value: "rectangle", label: "Rectangle", description: "Maximum swim area, modern aesthetic" },
      ],
    },
    {
      id: "size",
      question: "How large is your yard space?",
      options: [
        { value: "small", label: "Small", description: "Up to 15ft diameter" },
        { value: "medium", label: "Medium", description: "15-24ft diameter" },
        { value: "large", label: "Large", description: "24ft+ diameter" },
      ],
    },
    {
      id: "swimmers",
      question: "How many people will use the pool?",
      options: [
        { value: "1-2", label: "1-2 People", description: "Intimate relaxation" },
        { value: "3-5", label: "3-5 People", description: "Family fun" },
        { value: "6+", label: "6+ People", description: "Party ready" },
      ],
    },
    {
      id: "maintenance",
      question: "What's your maintenance preference?",
      options: [
        { value: "low", label: "Low Involvement", description: "Minimal time commitment" },
        { value: "standard", label: "Standard", description: "Regular weekly maintenance" },
        { value: "high", label: "High Involvement", description: "Hands-on care enthusiast" },
      ],
    },
    {
      id: "budget",
      question: "What's your budget range?",
      options: [
        { value: "economy", label: "Economy", description: "Budget-friendly options" },
        { value: "mid", label: "Mid-Range", description: "Quality and value balance" },
        { value: "premium", label: "Premium", description: "Top-tier features" },
      ],
    },
  ]

  const currentQuestion = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value })

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const getRecommendations = () => {
    const recommendations = []

    if (answers.budget === "premium" || answers.size === "large") {
      recommendations.push({
        title: "Easten Pool Kit",
        description: "Premium above-ground pool with galvanized steel frame and Krystal Kote finish",
        href: "/products/easten-pool-kit",
      })
    }

    recommendations.push({
      title: "Above-Ground Pool Kits",
      description: "Explore our full range of above-ground pool solutions",
      href: "/above-ground-pools",
    })

    if (answers.maintenance === "low") {
      recommendations.push({
        title: "Automated Maintenance Systems",
        description: "Reduce your pool maintenance time with automated solutions",
        href: "/equipment",
      })
    }

    return recommendations
  }

  const resetQuiz = () => {
    setStep(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const recommendations = getRecommendations()
    return (
      <Card className="overflow-hidden">
        <CardHeader className="bg-accent/10 border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <CardTitle>Your Personalized Recommendations</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Based on your preferences:</h3>
            <div className="flex flex-wrap gap-2">
              {answers.shape && <Badge variant="secondary">Shape: {answers.shape}</Badge>}
              {answers.size && <Badge variant="secondary">Size: {answers.size}</Badge>}
              {answers.swimmers && <Badge variant="secondary">Swimmers: {answers.swimmers}</Badge>}
              {answers.budget && <Badge variant="secondary">Budget: {answers.budget}</Badge>}
            </div>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{rec.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={rec.href}>
                      Explore Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button onClick={resetQuiz} variant="outline" className="w-full bg-transparent">
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-border bg-muted/30">
        <div className="space-y-3">
          <CardTitle>Find Your Perfect Pool</CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Question {step + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6 animate-in fade-in duration-300">
          <h3 className="text-lg font-semibold text-balance">{currentQuestion.question}</h3>

          <div className="grid gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="group text-left p-4 rounded-lg border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="font-medium mb-1 group-hover:text-accent transition-colors">{option.label}</div>
                <div className="text-sm text-muted-foreground">{option.description}</div>
              </button>
            ))}
          </div>

          {step > 0 && (
            <Button onClick={() => setStep(step - 1)} variant="ghost" className="w-full">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Question
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
