# Ambiblend: Your sound sanctuary
#### Video Demo:  <https://www.youtube.com/watch?v=Z287TQuP8Ms&t=49s>
#### Description:
---
###### Hello, I am Saloni Chopra. I am a practicing Product Designer from India. I really enjoy curating both digital & physical experiences for people, though I have largely worked in digital spaces. I am hoping to diversify my skills specially wthe ones that will help me explore design in extended reality (XR) spaces. Thank you to the entire team at Harcard and Edx, for this was a well designed, beginner friendly program that has helped be go from zero programming experience to designing nad coding my very own web product. Specia thanks to cs50.ai, it has been a great embodiment of the 
---

## Introduction to Ambilblend:

Welcome to AmbiBlend, where the power of music and nature combine to create a world of tranquility and focus. My mission is simple: to provide the user with the tools to curate the perfect ambiance. At AmbiBlend, runs on the belief that sound is a universal language that can heal, inspire, and transform. Your sound sanctuary is just a click away. Embark on your journey to harmony and let the music carry you to new heights of relaxation, focus, and serenity.

#### Whom did it designed for?

 For those on the spectrum, ambient music serves as a valuable tool for sensory regulation, offering comfort in potentially overwhelming situations. Additionally, this immersive auditory experience offers a respite from distractions, aiding in sustained attention, particularly crucial for those with ADHD. Moreover, making ambient music a personal ritual helps establish routine, a key element in managing daily tasks and transitions. Individual preferences vary, but the power of ambient music to enhance focus and emotional well-being remains indisputable.

#### Why AmbiBlend is better that other platforms?

__(i) Streamlined Curation:__
In a world where even simple decisions can feel overwhelming, AmbiBlend offers a lifeline. This platform meticulously curates playlists to match your mood and intent, sparing you from the daunting task of sifting through countless options. Whether you crave the sharp focus of rhythmic beats or the tranquil embrace of relaxation, AmbiBlend has already handpicked the perfect playlist to elevate your experience.

__(ii) Effortless User Experience:__
AmbiBlend's user interface is designed with simplicity in mind. We've removed unnecessary barriers, like mandatory logins, to ensure you can dive right into crafting your ideal ambiance. Just select your ambient mode and fine-tune the degree of focus or relaxation you desire. Our commitment to a seamless experience extends to features like continuous track looping, ensuring your immersion remains uninterrupted. With AmbiBlend, you can effortlessly create the environment you need, hassle-free.

---

## Project walkthrough
This is a front end heavy application is built in HTML and Javascript and it is supported by the Django framework. The audio files are in a backend database which can be accessed using the same django framework.

#### Why Django? Simply because I wanted to learn this framework as it's more widely accepted in India and offers greater power with more out-of-the-box controls

#### Breaking the product into solveable parts:
1. Insert and play mp3 files in the django backend in the 2 following models 
[Ambient track](https://drive.google.com/file/d/1J8g-7DHjVAZl7dP2qCnwpq6fle123z2c/view?usp=sharing)
[Background track](https://drive.google.com/file/d/1P8aZsvOMVSYd3VcUyxt-hZqjUqsmVtht/view?usp=share_link)
1. Make the both selectors work
1. Seemlessly loop the tracks and add a "change track" button
1. Give play pause and volume controls
1. Stitch in all pages and their aesthetics [Link to figma file](https://www.figma.com/file/0S25zoKAys2Z8mKb9eaJ4j/CS-50-?type=design&node-id=104%3A1437&mode=design&t=m78mKj35xKkAYtgg-1)

#### File structure:
The ambiblend folder contains
1. The 'App' contains the static and template files, as well as some framework files. Here are the key files and folders within it:

    * The 'Static' folder houses all assets (including illustrations) the 'styles.css' file, and a separate JavaScript file. The JavaScript code is shared across multiple pages, which is why it's stored in a separate file and linked in the templates.
    * Inside the 'templates' folder, you'll find all the HTML pages. I've also created a layout page to minimize redundancy and avoid repetitive copying and pasting.
    * The 'admin.py' file retrieves data from the backend, which is defined in the 'models.py' file.
    * Lastly, 'views.py' is where all the rendering logic comes together, tying everything into a cohesive whole.
1. Within the 'django' folder, you'll find other framework files, with the key file being 'urls.py.' Its primary role is to route incoming web requests to 'views.py.'
1. the 'media' folder where all the audio files are stored. These audio files are retrieved from the backend by a file named 'admin.py'.
---
## To run the project, input the following commands in the listed order:
``` bash 
pip install Django
```

``` bash 
cd FinalProject 
```

``` bash 
FinalProject/ $ cd ambiblend
```
``` bash 
FinalProject/ambiblend/ $ python manage.py runserver
```
---
# "This is, and now, this was CS50"
---

