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
	{ID: 3, Text: "What is the largest ocean on Earth?", Options: []string{"Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"}, Answer: "Pacific Ocean"},
}
var currentQuestionIndex = 0

func getQuestionHandler(w http.ResponseWriter, r *http.Request) {
	if len(questions) > 0 {
		if currentQuestionIndex >= len(questions) {
			currentQuestionIndex = 0
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(questions[currentQuestionIndex])
		currentQuestionIndex++
	} else {
		http.NotFound(w, r)
	}
}

func gradeQuestionHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var userAnswer struct {
		ID     int    `json:"id"`
		Answer string `json:"answer"`
	}

	err := json.NewDecoder(r.Body).Decode(&userAnswer)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	for _, q := range questions {
		if q.ID == userAnswer.ID {
			result := map[string]bool{
				"correct": q.Answer == userAnswer.Answer,
			}
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(result)
			return
		}
	}
	http.Error(w, "Question not found", http.StatusNotFound)
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.HandleFunc("/api/question", getQuestionHandler)
	http.HandleFunc("/api/grade", gradeQuestionHandler)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}