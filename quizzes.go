package main

import (
	"strings"
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	// TODO: 
	// Import quiz questions and answers from a file depending on which quiz they are taking
	// Present A-D to user when asking questions
	// tie in with html front end and make buttons for user to click on instead of typing in answers
	quizFile, err := os.Open("testquiz.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer quizFile.Close()
	scanner := bufio.NewScanner(quizFile)
	Qtarget := "Q:"
	Atarget := "E:"
	lineNumber := 0
	var questions []string
	var answers []string

	for scanner.Scan() {
		line := scanner.Text()
		lineNumber++

		if strings.Contains(line, Qtarget){
			questions = append(questions, line)
		}

		if strings.Contains(line, Atarget){
			answerString := line[3:]
			answers = append(answers, answerString)
		}
	}

		answerIndex := 0
		grade := 0

	//Way to test if the questions and answers are being imported and anwsered correctly
	for _, line := range questions {
		fmt.Println(line)
		reader := bufio.NewScanner(os.Stdin)
		reader.Scan()
		anwser := reader.Text()
		fmt.Println("Your answer: ", anwser)
		fmt.Println(anwser == answers[answerIndex])
		fmt.Println("Correct answer: ", answers[answerIndex])
		answerIndex++
		if(anwser == answers[answerIndex-1]){
			grade++
		}
	}
	gradeQuiz(grade, len(questions))
}

func gradeQuiz(grade int, totalQuestions int){
	if(grade == totalQuestions - 1){
		fmt.Println("You passed the quiz!")
	} else {
		fmt.Println("You failed the quiz.")
	}
}