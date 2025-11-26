package main

import (
	"encoding/json"
	"net/http"
	"log"
)

type Question struct {
	ID int `json:"id"`
	Text string `json:"text"`
	Options []string `json:"options"`
	Answer string `json:"correct_answer"`
}

var questions = []Question{
	{ID: 1, Text: "What is the capital of France?", Options: []string{"Berlin", "Paris", "Rome", "Madrid"}, Answer: "Paris"},
	{ID: 2, Text: "Which planet is known as the Red Planet?", Options: []string{"Earth", "Mars", "Jupiter", "Venus"}, Answer: "Mars"},
}

func getQuestionHandler(w http.ResponseWriter, r *http.Request) {
	if len(questions) > 0 {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(questions[0])
	} else {
		http.NotFound(w, r)
	}
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.HandleFunc("/api/question", getQuestionHandler)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

