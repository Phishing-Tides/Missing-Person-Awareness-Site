package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"
)

func main() {
	// Open a connection to the SQLite database
	db, err := sql.Open("sqlite", "./example.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	createTable(db)

	// Read data from a file
	jsonFile, err := os.Open("data.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer jsonFile.Close()

	}

func createTable(db *sql.DB) {
	createTableAccounts := `CREATE TABLE IF NOT EXISTS records (
		"id" INTEGER PRIMARY KEY AUTOINCREMENT,
		"username" TEXT,
		"passwordhash" TEXT,
		"progress" INTEGER
	);`
	_, err := db.Exec(createTableAccounts)
	if err != nil {
		log.Fatal(err)
	}
}

// adds a new account to the database when user signs up
func AddAccount(db *sql.DB, username, passwordhash string) error {
	insertAccount := `INSERT INTO records (username, passwordhash, progress) VALUES (?, ?, ?);`
	_, err := db.Exec(insertAccount, username, passwordhash, 0)
	return err
}

	func GetAccount(db *sql.DB, username, passwordhash string) (string, int, error) {
		var count int
		Userquery := "SELECT COUNT(*) FROM users WHERE username = ?"
		err := db.QueryRow(Userquery, username).Scan(&count)
		if err != nil {
			return false, fmt.Errorf("failed to execute Userquery: %w", err)
		}
		return count > 0, nil
		// check db for username and the compare passwordhashes
	}
