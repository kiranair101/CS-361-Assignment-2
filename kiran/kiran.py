# import library
import time

# -----------------------------------------
# Needed to call microservice:
PIPELINE_PATH = '/Users/elikurlbaum/PycharmProjects/kiran/pipeline.txt'


def show_images(exercise_name):
    f = open(PIPELINE_PATH, 'w')
    f.write(str(exercise_name))
    f.close()
# -----------------------------------------


print("Welcome to my Kiran's Fitness App!") # COGNITIVE HEURISTIC #6: The entire app itself is a large path that takes the user on a journey to learn all about factors that can influence the body
print("You will learn all about where you stand in the BMI scale")
print("You will learn all about how many calories you should typically eat daily to reduce weight, maintain weight or gain muscle") # COGNITIVE HEURISTIC #1: The app gives a brief explanation of what the app is doing and what the user is getting into.

name = input("What is your name? ") # COGNITIVE HEURISTIC #4: since this is a text based app which I will most likely switch to JS and write a website
                                    # most of the features the user will ever need to know is just how to follow instructions.
print("It is nice to meet you", name)
weight = input("What is your weight in pounds? ")
weight_check = input("Double checking that this is the weight you typed in: " + str(weight) + " pounds. Type 1 to " # COGNITIVE HEURISTIC #5: I have entered an editing section in case the user did not type the
                                                                                                  "confirm and 2 to "# weight or height with accuracy so they can backtrack and change their answer
                                                                                                  "edit: ")
while weight_check != '1' and weight_check != '2':
    weight_check = input("You have typed an invalid input. Please choose from the options. Type 1 to confirm your "
                             "weight " + str(weight) + " and 2 to edit: ")

if weight_check == "1":
    pass
else:
    weight = input("What is edited weight in pounds: ")
height = input("What is your height in inches: ")
height_check = input("Double checking that this is the height you typed in: " + str(height) + " inches. Type 1 to " # COGNITIVE HEURISTIC #8: This is similar to Heuristic 5 where they can make sure that the answer they chose
                                                                                                  "confirm and 2 to " # is accurate 
                                                                                                  "edit: ")
while height_check != '1' and height_check != '2':
    height_check = input("You have typed an invalid input. Please choose from the options. Type 1 to confirm your "
                             "height to be " + str(height) + " inches or 2 to edit: ")
if height_check == '1':
    pass
else:
    height = input("What is edited height in inches? ")
# print(library.BMI_calculator(float(height), float(weight)))
gender = input("Please type 1 if you are male or 2 if you are female: ")
while gender != '1' and gender != '2':
    gender = input("You have typed an invalid input. Please choose from the options. Type 1 if you are male or type 2 if you are female: ")

choice = input("If you want to lose weight, type 1. If you want to maintain weight, type 2. If you want to gain " # COGNITIVE HEURISTIC #7: In case the user does not choose any of the options, there is the learn more option as a different approach
                   "muscle, type 3. If you want to learn more type, 4 If you would like to exit, type 0: ")# COGNITIVE HEURISTIC #2: In a way, the choices given here are also somewhat similar to an advanced option page
if choice == '0':
    exit()
calories = input("Please give a rough estimate on how many calories you eat per day. The more accurate the answer "
                     "the better. ")
calorie_check = input("Double checking that this is the calorie count you typed in: " + str(calories) + " Type 1 to"
                                                                                                     " confirm and 2 "
                                                                                                     "to edit. ")
while calorie_check != '1' and calorie_check != '2':
    calorie_check = input("You have typed an invalid input. Please choose from the options. Type 1 to confirm your "
                             "calories to be " + str(calories) + " or 2 to edit: ")
if calorie_check == '1':
    pass
else:
    calories = input("What is your edited daily calorie intake? ")
if choice == '1': # true for both male and female
    print("To lose weight, according to Harvard Health, you should roughly eat about 500 to 1000 calories than your \n "
          "weight-maintenance calories, which in your case is about", int(calories) - 700, "calories")
    time.sleep(4)
    print("Now to lose weight here are some foods that you can consume: Yogurt, Apples, Nuts, Beans, Soup are all \n excellent food choices to lose weight according to the Webmd. Always remember the The Golden Rule: 6 small meals are better than 3 large meals!")
elif choice == '2':
    if gender == '1':
        print("To maintain your weight, according to the Healthline, you typically must be in the 2000-3000 daily calorie range") # for male
        time.sleep(2)
        print("Now to maintain your weight, the best food choices are: Water, Salmon, Beans, Eggs, Nuts are all excellent choices according to Conehealth")
        time.sleep(2)
        print("The Golden rule to remember is that 6 small meals are better than 3 large meals. ")
        time.sleep(2)
        print("Thank you so much for using my app! Farewell!")
    else:
        print("To maintain your weight, according to the Healthline, you must consume around 1600-2400 daily calorie range") # for female
elif choice == '3':
    print("To gain muscle you must roughly eat in a calorie surplus of 500 calories which is", int(calories) + 500, "calories")
    time.sleep(2)
    print("in your case. This does NOT mean just eat junk food. You must, according to Healthline, consume nutrient-dense whole")
    time.sleep(2)
    print("foods such as rice, nuts, avocados, whole eggs etc. The Golden rule to remember is that 6 small meals are better than 3 large meals.")
    time.sleep(2)
    stop = input("Would you like to continue type 1. If you want to exit press 2: ") # COGNITIVE HEURISTIC #3: Like this, there are multiple of these: Are you sure you want to continue. Just to make sure the user
                                                                                    # wants to continue or just exit the program
    while stop != '1' and stop != '2':
        stop = input("You have typed an invalid input. Type 1 if you want to continue or type 2 if you want to exit: ")
    if stop == 2:
        exit()
    else:
        workout_part = input("What part of the body do you want to grow muscles? Type 1 for Arms, type 2 for Body, type 3 for Legs and type 4 for Back: ")
        while workout_part != '1' and workout_part != '2' and workout_part != '3' and workout_part != '4':
            input("You have typed an invalid input. Type 1 for Arms, type 2 for Body, type 3 for Legs and type 4 for Back: ")
        if workout_part == '1':
            print("So you want to work out your Arms! Excellent choice!")
            time.sleep(2)
            print("Here are some excellent at home exercises you can do according to Greatist.com: ")
            time.sleep(1)
            print("Push-up: 3 sets of 10 reps.")
            time.sleep(1)
            print("Triceps dip: 3 sets of 12 reps")
            time.sleep(1)
            print("Side plank with arm extension: 3 sets of 10 reps on each side")
            time.sleep(1)
            print("Superman with arm extension: 3 sets of 10 reps")
            time.sleep(1)
            print("Inchworm: 3 sets of 10–12 reps")
            time.sleep(1)
            print("Plank tap: 3 sets of 15–20 reps")
            time.sleep(1)
            print("Decline push-up: 3 sets of 10 reps.")
            # -------------------------------------------------------------
            # Calling Microservice
            show_images('pushup,tricep-dip,Side plank with arm extension,Superman with arm extension,Inchworm,Plank tap,Decline push-up')
            # -------------------------------------------------------------
            time.sleep(7)
            print("Thank you for using my app! Enjoy your workout! Farewell!")
        elif workout_part == '2':
            print("So you want to work out your Body! Excellent choice!")
            time.sleep(1)
            print("Here are some excellent at home exercises you can do according to Greatist.com: ")
            time.sleep(1)
            print("Push - up: 3–6 sets of 6–12 reps")
            time.sleep(1)
            print("Burpee: 6 per minute for 15 minutes")
            time.sleep(1)
            print("Pull-up: 3 sets of 2–5 reps")
            # -------------------------------------------------------------
            # Calling Microservice
            show_images('pushup,Burpees,Pull-up')
            # -------------------------------------------------------------
            time.sleep(7)
            print("Thank you for using my app! Enjoy your workout! Farewell!")
        elif workout_part == '3':
            print("So you want to work out your Legs! Excellent choice!")
            time.sleep(1)
            print("Here are some excellent at home exercises you can do according to Greatist.com: ")
            time.sleep(1)
            print("Step-up: 3 sets of 15 reps (each side)")
            time.sleep(1)
            print("Lunge: 3 sets of 15 reps (each side)")
            time.sleep(1)
            print("Squat: 3–5 sets of 8–12 reps")
            # -------------------------------------------------------------
            # Calling Microservice
            show_images('Step-up,Lunge,Squat')
            # -------------------------------------------------------------
            time.sleep(7)
            print("Thank you for using my app! Enjoy your workout! Farewell!")
        elif workout_part == '4':
            print("So you want to work out your Back! Excellent choice!")
            time.sleep(1)
            print("Wide-Grip Pushup With Tempo Sets: 5  Reps: 5  Rest: 75–90 sec.")
            time.sleep(2)
            print("Split-Stance Row Iso Hold with TowelSets: 4  Reps: Work for 20 sec. (each side)  Rest: 90 sec.")
            time.sleep(2)
            print("Off-set Bent-over Row with Broomstick Sets: 4  Reps: 15 (each side)  Rest: 60 sec")
            time.sleep(2)
            print("Plank Pull Sets: 4  Reps: 30–45 sec.  Rest: 60 sec.")
            # -------------------------------------------------------------
            # Calling Microservice
            show_images('Wide-Grip Pushup With Tempo Sets,Split-Stance Row Iso Hold with TowelSets,Off-set Bent-over Row with Broomstick Sets,Plank Pull Sets')
            # -------------------------------------------------------------
            time.sleep(7)
            print("Thank you for using my app! Enjoy your workout! Farewell!")


