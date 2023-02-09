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
- The microservice will then display the images that correspond to the exercises written
  to pipeline.txt, and clear out the file so it can be used again.