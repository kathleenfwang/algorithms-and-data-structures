# picks a random number from 1 - 10 inclusive
# user gets 3 chances to guess, each time priting out feedback if right or wrong 
import random 
def main():
    score = 0 
    guess_number(score)

def guess_number(score):
    tries = 3 
    correct_num = random.randint(1,10)
    def play_again():
        print("-----------------")
        user_in = input("Play again? y/n ")
        if user_in == "y": guess_number(score) 
        else:
            print("Thanks for playing!")
            print("********************")
    while tries > 0:
        print("*************************************")
        guess = input("Guess the number (1-10): ")
        if guess == str(correct_num): 
            score += 1 
            print("Congrats you are correct! Score: ", score)
            play_again()
        
        else:
            print("Wrong :(")
            tries -=1
            if tries == 0:
                print("Correct number is: ", correct_num)
                play_again()
    
main()