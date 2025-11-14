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
	// Otherwise display a failure message and the reason why it is wrong
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
	for _, line := range questions {
		fmt.Println(line)
		reader := bufio.NewScanner(os.Stdin)
		reader.Scan()
		anwser := reader.Text()
		fmt.Println("Your answer: ", anwser)
		fmt.Println(anwser == answers[answerIndex])
		fmt.Println("Correct answer: ", answers[answerIndex])
		answerIndex++
	}
}