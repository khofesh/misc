package main

import (
	"fmt"
	"strings"
)

func main() {
	checks := []string{}

	for _, sentence := range []string{
		"The quick brown fox jumps over the lazy dog.",
		`Watch "Jeopardy!", Alex Trebek's fun TV quiz game.`,
		"Not a pangram.",
	} {
		if checkPangram(sentence) == "1" {
			checks = append(checks, "1")
			fmt.Println("Yes:", sentence)
		} else {
			checks = append(checks, "0")
			fmt.Println("No: ", sentence)
		}
	}

	fmt.Println(strings.Join(checks[:], ""))
}

func checkPangram(sentence string) string {
	var missing uint32 = (1 << 26) - 1

	for _, c := range sentence {
		var index uint32
		if 'a' <= c && c <= 'z' {
			index = uint32(c - 'a')
		} else if 'A' <= c && c <= 'Z' {
			index = uint32(c - 'A')
		} else {
			continue
		}

		missing &^= 1 << index
		if missing == 0 {
			return "1"
		}
	}
	return "0"
}
