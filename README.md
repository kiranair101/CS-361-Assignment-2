# CS-361-Assignment-1
Eli Kurlbaum

# Communication Contract: Microservice Implemented for Partner
Request:
- Write the names of the exercises (exactly how they are written in their corresponding 
  jpeg files in 'Images') as a string to the text file called pipeline.txt.
- Separate the names of the exercises with commas (and no spaces).
- For example: 'Step-up,Lunge,Squat'

Receive:
- Once per second, the microservice reads the text file called pipeline.txt.
- If the text file contains information, the microservice will act on it.
- The microservice will then write the paths to the images that correspond to the 
  exercises written to pipeline.txt, which can then be used by the requester.

  ![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)