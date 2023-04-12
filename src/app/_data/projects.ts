import { IProject } from "../interfaces/project";
import { Language } from "./languages";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'Discord Bot',
    school: false,
    languages: [Language.py],
    sections: [
      {
        id: 'top',
        content: `<p>A Discord bot written in Python which utilizes the discord.py library to play music and assist in virtual D&D sessions in my friend's Discord server. The bot utilizes the youtubeDL library to search and download music from YouTube, which is then played through a voice channel in the server. In addition to music playback, the bot has commands for rolling dice, which can be used to simulate actions and combat in D&D sessions. The bot can roll various types of dice with customizable modifiers and provide the results in the chat. Through this project, I gained experience in integrating APIs, programming with Python, and developing a customized bot for multiple use cases as requested by users.</p>`,
        subsections: []
      },
      {
        id: 'tech',
        title: 'Technical Specifications',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. Adipiscing bibendum est ultricies integer quis auctor. Convallis aenean et tortor at risus viverra adipiscing at. Nibh sit amet commodo nulla facilisi. Odio facilisis mauris sit amet massa vitae. In fermentum posuere urna nec tincidunt. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Convallis tellus id interdum velit laoreet id donec. Metus aliquam eleifend mi in nulla posuere sollicitudin. Lorem ipsum dolor sit amet consectetur adipiscing. Quis varius quam quisque id diam vel. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Et tortor consequat id porta nibh venenatis cras sed. Adipiscing elit duis tristique sollicitudin. Quam elementum pulvinar etiam non.
        <br/><br/>
        Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed vulputate mi sit amet mauris. Lectus urna duis convallis convallis tellus id. Dui vivamus arcu felis bibendum ut tristique et. Felis donec et odio pellentesque. Mauris in aliquam sem fringilla. Dui id ornare arcu odio ut sem nulla pharetra. Eget aliquet nibh praesent tristique magna sit amet purus. Turpis egestas pretium aenean pharetra magna ac. Id eu nisl nunc mi ipsum faucibus. Mauris in aliquam sem fringilla ut morbi. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
        <br/><br/>
        Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing. Id semper risus in hendrerit gravida. Nisi quis eleifend quam adipiscing vitae. Molestie a iaculis at erat pellentesque adipiscing. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Eget aliquet nibh praesent tristique. Purus sit amet luctus venenatis lectus magna fringilla. Vel facilisis volutpat est velit egestas dui id ornare arcu. Bibendum est ultricies integer quis auctor elit sed vulputate. Nisi lacus sed viverra tellus in hac habitasse. Dignissim enim sit amet venenatis urna cursus eget nunc. Elementum integer enim neque volutpat. In nibh mauris cursus mattis molestie. Cras ornare arcu dui vivamus arcu felis bibendum. Placerat vestibulum lectus mauris ultrices eros. Velit dignissim sodales ut eu sem integer vitae justo eget. At consectetur lorem donec massa sapien faucibus.
        <br/><br/>
        Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Vulputate ut pharetra sit amet. Bibendum ut tristique et egestas. Neque ornare aenean euismod elementum nisi quis. Ac tortor dignissim convallis aenean et tortor. Adipiscing commodo elit at imperdiet. Amet nisl suscipit adipiscing bibendum est. Diam vulputate ut pharetra sit amet aliquam id diam. Dolor sed viverra ipsum nunc aliquet bibendum. Tincidunt id aliquet risus feugiat in ante. Enim ut tellus elementum sagittis vitae et leo duis ut.
        <br/><br/>
        Ut morbi tincidunt augue interdum velit euismod in pellentesque. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sed risus ultricies tristique nulla aliquet enim tortor at. Id ornare arcu odio ut sem nulla pharetra diam sit. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Nec tincidunt praesent semper feugiat. Urna nec tincidunt praesent semper feugiat nibh. Risus nullam eget felis eget nunc lobortis mattis aliquam. Molestie at elementum eu facilisis. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Pretium lectus quam id leo in vitae turpis massa sed. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Purus in massa tempor nec. Mauris rhoncus aenean vel elit scelerisque mauris. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Sagittis orci a scelerisque purus semper eget duis at tellus. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae tempus quam pellentesque nec nam aliquam.
        <br/><br/>`,
        subsections: [
          {
            id: 'used-tech',
            title: 'Technologies Used',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper. Adipiscing bibendum est ultricies integer quis auctor. Convallis aenean et tortor at risus viverra adipiscing at. Nibh sit amet commodo nulla facilisi. Odio facilisis mauris sit amet massa vitae. In fermentum posuere urna nec tincidunt. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Convallis tellus id interdum velit laoreet id donec. Metus aliquam eleifend mi in nulla posuere sollicitudin. Lorem ipsum dolor sit amet consectetur adipiscing. Quis varius quam quisque id diam vel. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Et tortor consequat id porta nibh venenatis cras sed. Adipiscing elit duis tristique sollicitudin. Quam elementum pulvinar etiam non.
            <br/><br/>
            Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed vulputate mi sit amet mauris. Lectus urna duis convallis convallis tellus id. Dui vivamus arcu felis bibendum ut tristique et. Felis donec et odio pellentesque. Mauris in aliquam sem fringilla. Dui id ornare arcu odio ut sem nulla pharetra. Eget aliquet nibh praesent tristique magna sit amet purus. Turpis egestas pretium aenean pharetra magna ac. Id eu nisl nunc mi ipsum faucibus. Mauris in aliquam sem fringilla ut morbi. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
            <br/><br/>
            Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing. Id semper risus in hendrerit gravida. Nisi quis eleifend quam adipiscing vitae. Molestie a iaculis at erat pellentesque adipiscing. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Eget aliquet nibh praesent tristique. Purus sit amet luctus venenatis lectus magna fringilla. Vel facilisis volutpat est velit egestas dui id ornare arcu. Bibendum est ultricies integer quis auctor elit sed vulputate. Nisi lacus sed viverra tellus in hac habitasse. Dignissim enim sit amet venenatis urna cursus eget nunc. Elementum integer enim neque volutpat. In nibh mauris cursus mattis molestie. Cras ornare arcu dui vivamus arcu felis bibendum. Placerat vestibulum lectus mauris ultrices eros. Velit dignissim sodales ut eu sem integer vitae justo eget. At consectetur lorem donec massa sapien faucibus.
            <br/><br/>
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Vulputate ut pharetra sit amet. Bibendum ut tristique et egestas. Neque ornare aenean euismod elementum nisi quis. Ac tortor dignissim convallis aenean et tortor. Adipiscing commodo elit at imperdiet. Amet nisl suscipit adipiscing bibendum est. Diam vulputate ut pharetra sit amet aliquam id diam. Dolor sed viverra ipsum nunc aliquet bibendum. Tincidunt id aliquet risus feugiat in ante. Enim ut tellus elementum sagittis vitae et leo duis ut.
            <br/><br/>
            Ut morbi tincidunt augue interdum velit euismod in pellentesque. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sed risus ultricies tristique nulla aliquet enim tortor at. Id ornare arcu odio ut sem nulla pharetra diam sit. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Nec tincidunt praesent semper feugiat. Urna nec tincidunt praesent semper feugiat nibh. Risus nullam eget felis eget nunc lobortis mattis aliquam. Molestie at elementum eu facilisis. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Pretium lectus quam id leo in vitae turpis massa sed. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Purus in massa tempor nec. Mauris rhoncus aenean vel elit scelerisque mauris. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Sagittis orci a scelerisque purus semper eget duis at tellus. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vitae tempus quam pellentesque nec nam aliquam.`,
            subsections: []
          }
        ]
      }
    ],
    tags: ['Discord.py', 'Bot', 'Coroutines', 'Youtube-dl', 'User Feedback', 'Bug Fixes'],
    created: new Date("2021-09-01"),
    modified: new Date("2022-11-01"),
    gitLink: "https://github.com/AaronTheNerd/DiscordBot",
    thumbnails: ["assets/thumbnails/discord.webp"]
  },
  {
    id: 2,
    title: 'Sorting Algorithm Visualizer',
    school: false,
    languages: [Language.cpp],
    sections: [
      {
        id: 'top',
        content: `<p>A program written in C++ designed to provide a visual representation of various sorting algorithms. The program utilizes the GTK windowing toolkit to display the current state of the list being sorted, as well as information on which sort is currently running and how many swaps and lookups have occurred.
        </p>`,
        subsections: []
      }
    ],
    tags: ['GTK', 'Multithreading', 'Sorting Algorithms', 'Visualizer'],
    created: new Date("2021-08-01"),
    modified: new Date("2021-08-31"),
    gitLink: 'https://github.com/AaronTheNerd/SortingAlgorithmVisualizer',
    thumbnails: [
      "assets/thumbnails/sorter/sorter1.jpg",
      "assets/thumbnails/sorter/sorter2.jpg",
      "assets/thumbnails/sorter/sorter3.jpg"
    ]
  },
  {
    id: 3,
    title: 'Seamless Triangular GIF Generator',
    school: false,
    languages: [Language.py],
    sections: [
      {
        id: 'top',
        content: `<p>A Python program that generates mesmerizing animations of morphing triangles. The program utilizes a combination of mathematical algorithms and user customization to create unique and visually appealing GIFs.
        </p>`,
        subsections: []
      }
    ],
    tags: ['OpenSimplex', 'PIL', 'ImageMagick', 'Delaunay Triangulation'],
    created: new Date("2021-05-01"),
    modified: new Date("2021-07-01"),
    gitLink: 'https://github.com/AaronTheNerd/DynamicBackgrounds',
    thumbnails: [
      "assets/thumbnails/triangles/triangle1.jpg",
      "assets/thumbnails/triangles/triangle2.jpg"
    ]
  },
  {
    id: 4,
    title: 'Unsigned Arbitrary Precision Integer',
    school: false,
    languages: [Language.cpp],
    sections: [
      {
        id: "top",
        content: `<p>A C++ library that provides a powerful tool for handling large integer numbers with arbitrary precision. This object serves as a standard numeric type in C++ and offers a wide range of features to perform arithmetic operations on integers of any size.</p>`,
        subsections: []
      }
    ],
    tags: ['Performance Testing', 'Unit Testing', 'Optimization', 'Karatsuba'],
    created: new Date("2020-11-01"),
    modified: new Date("2021-07-01"),
    gitLink: 'https://github.com/AaronTheNerd/uInteger',
    thumbnails: []
  },
  {
    id: 5,
    title: 'Programmable Christmas Tree',
    school: false,
    languages: [Language.py, Language.arduino],
    sections: [
      {
        id: "top",
        content: `<p>A DIY project that brings a unique and interactive twist to traditional holiday decorations. By utilizing an Arduino microcontroller and a Python program, this project allows users to program and customize the lighting patterns and animations on their Christmas tree, creating a dazzling and dynamic display.</p>`,
        subsections: []
      }
    ],
    tags: ['Serial I/O', 'Information Encoding/Decoding', 'Arduino'],
    created: new Date("2020-11-01"),
    modified: new Date("2020-12-01"),
    gitLink: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Arduino/AnimatedChristmasTree',
    thumbnails: [
      "assets/thumbnails/christmas.jpg"
    ]
  },
  {
    id: 6,
    title: 'High Precision Integer',
    school: false,
    languages: [Language.cpp],
    sections: [
      {
        id: "top",
        content: `<p>A C++ library that provides support for high precision arithmetic operations on large integers. This library is designed to act as a standard numeric type in C++, allowing for precise calculations with integers of any size, and it offers flexibility in setting the precision of the integers at compile time.</p>`,
        subsections: []
      }
    ],
    tags: [],
    created: new Date("2019-12-01"),
    modified: new Date("2019-12-31"),
    gitLink: 'https://github.com/AaronTheNerd/BigInteger',
    thumbnails: []
  },
  {
    id: 7,
    title: 'IMDb Webscraper',
    school: false,
    languages: [Language.py],
    sections: [
      {
        id: "top",
        content: `<p>A Python-based web scraping tool that allows users to retrieve the top-rated 250 movies from IMDb. The scraper utilizes popular Python libraries such as Selenium, BeautifulSoup, and Pandas to automate the process of extracting movie data from IMDb's website and exporting it to a spreadsheet for further use.</p>`,
        subsections: []
      }
    ],
    tags: ['Webscraping', 'Pandas', 'BeutifulSoup', 'Selenium'],
    created: new Date("2020-03-01"),
    modified: new Date("2020-03-30"),
    gitLink: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Python/IMDb%20Webscraper',
    thumbnails: []
  },
  {
    id: 9,
    title: 'The Game of Life',
    school: false,
    languages: [Language.java],
    sections: [
      {
        id: "top",
        content: `<p>A Java program that implements Conway's Game of Life. The program provides a GUI that allows users to interactively simulate the evolution of a population of cells according to the rules of the Game of Life.</p>`,
        subsections: []
      }
    ],
    tags: ['Java AWT', 'JavaX Swing'],
    created: new Date("2018-12-01"),
    modified: new Date("2018-12-31"),
    gitLink: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Java/The%20Game%20of%20Life',
    thumbnails: [
      "assets/thumbnails/GoL/GoL1.jpg",
      "assets/thumbnails/GoL/GoL2.jpg",
      "assets/thumbnails/GoL/GoL3.jpg"
    ]
  },
  {
    id: 10,
    title: 'RISC-V CPU',
    school: true,
    languages: [Language.verilog],
    sections: [
      {
        id: "top",
        content: `<p>A Verilog-based implementation of a RISC-V CPU. This CPU is designed to simulate a three-stage pipeline for executing RISC-V instructions, including R-, I-, U-, J-, B-, and L-type instructions.</p>`,
        subsections: []
      }
    ],
    tags: ['RISC-V', 'Assembly Programming', 'Unit Testing', 'End-to-End Testing'],
    created: new Date("2020-10-01"),
    modified: new Date("2020-12-01"),
    gitLink: 'https://github.com/AaronTheNerd/CSCE611/tree/master/lab_jb',
    thumbnails: ["assets/thumbnails/de2-115.png"]
  },
  {
    id: 11,
    title: 'Simple HTTP Client',
    school: true,
    languages: [Language.java],
    sections: [
      {
        id: "top",
        content: `<p>A simple HTTP client program developed as an assignment for a computer networking course. The primary goal of this program is to send GET requests to standard web servers, retrieve HTTP responses, and handle one-hop HTTP redirects, while also allowing users to observe the HTTP requests and responses using Wireshark and save the response HTTP for further analysis.</p>`,
        subsections: []
      }
    ],
    tags: ['Wireshark', 'HTTP'],
    created: new Date("2020-04-01"),
    modified: new Date("2020-04-08"),
    thumbnails: ["assets/thumbnails/network-p1-output.png"]
  },
  {
    id: 12,
    title: 'Roomba Interface',
    school: true,
    languages: [Language.py],
    sections: [
      {
        id: "top",
        content: `<p>A Python program that was developed as part of an assignment for a Robotics course. The program provides a way for a computer to interface with a Roomba. The Roomba Interface enables users to parse input from all the sensors on the Roomba, as well as send commands to drive the Roomba, all while operating asynchronously in separate threads.</p>`,
        subsections: []
      }
    ],
    tags: ['Raspberry Pi', 'Serial I/O', 'Multithreading', 'Sensors', 'Closed-Loop Controller'],
    created: new Date("2019-10-01"),
    modified: new Date("2019-12-01"),
    gitLink: 'https://github.com/AaronTheNerd/csce274_project1',
    thumbnails: []
  },
  {
    id: 13,
    title: 'Simple TCP Connection',
    school: true,
    languages: [Language.java],
    sections: [
      {
        id: "top",
        content: `<p>The Java TCP Connection is a simple TCP implementation developed as an assignment for a computer networking course. The primary goal of this program is to create a reliable and congestion-aware data transfer mechanism over an existing UDP connection, providing reliable and ordered delivery of data between two endpoints.</p>`,
        subsections: []
      }
    ],
    tags: ['TCP Connection'],
    created: new Date("2020-04-01"),
    modified: new Date("2020-04-08"),
    gitLink: 'https://github.com/AaronTheNerd/csce416ec',
    thumbnails: []
  },
  {
    id: 14,
    title: 'Audio Visualizer',
    school: true,
    languages: [Language.matlab],
    sections: [
      {
        id: "top",
        content: `<p>A MATLAB program developed as an assignment for a Signals and Systems course. The primary goal of this program is to provide a visual representation of an audio file loaded into MATLAB, displaying the components of the current waveform in real-time using the FFT algorithm. The program also incorporates visually appealing "falling bars" to add an extra aesthetic touch to the visualization.</p>`,
        subsections: []
      }
    ],
    tags: ['FFT', 'Visualizer'],
    created: new Date("2019-12-01"),
    modified: new Date("2019-12-08"),
    gitLink: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/MatLab/AudioVisualizer',
    thumbnails: [
      "assets/thumbnails/visualizer.jpg"
    ]
  },
  {
    id: 15,
    title: 'Coin-Row and Robot-Coin Solution',
    school: true,
    languages: [Language.cpp],
    sections: [
      {
        id: "top",
        content: `<p>A C++ program developed as an assignment for a Data Structures and Algorithms course. This program implements dynamic programming techniques to solve two classic problems: the Coin-Row problem and the Robot-Coin problem.</p>`,
        subsections: []
      }
    ],
    tags: [],
    created: new Date("2019-04-01"),
    modified: new Date("2019-04-08"),
    gitLink: 'https://github.com/csce350-spring19/program-5-AaronTheNerd/tree/master/src',
    thumbnails: []
  },
  {
    id: 16,
    title: 'Simulated SPI Transactions',
    school: true,
    languages: [Language.cpp],
    sections: [
      {
        id: "top",
        content: `<p>A C++ program that was developed as an assignment for a Computer Systems course. The goal of the project was to implement a simulation of an SPI transfer between two simulated devices using bit-banging techniques. The program emulates the SPI communication protocol, allowing for data exchange between the simulated devices.</p>`,
        subsections: []
      }
    ],
    tags: ['SPI Data Transfer', 'Bit Manipulation'],
    created: new Date("2020-04-01"),
    modified: new Date("2020-04-08"),
    gitLink: 'https://github.com/AaronTheNerd/virtual_spi',
    thumbnails: []
  },
  {
    id: 17,
    title: 'Custom Syscall',
    school: true,
    languages: [Language.c],
    sections: [
      {
        id: "top",
        content: `<p>A C program that was developed as part of an assignment for an Operating Systems course. This program involves adding a custom system call to the Linux kernel, requiring the recompilation of the kernel. The custom syscall allows users to walk through the memory of a program and determine the permissions of a specific block of memory.</p>`,
        subsections: []
      }
    ],
    tags: ['Linux Kernel', 'Virtual Memory'],
    created: new Date("2019-11-01"),
    modified: new Date("2019-11-08"),
    thumbnails: []
  },
  {
    id: 18,
    title: 'Runtime Optimization of MergeSort via Multithreading',
    school: true,
    languages: [Language.cpp],
    sections: [
      {
        id: "top",
        content: `<p>A C++ program that was developed as part of an assignment for a Statistics course. The aim of the project was to optimize the runtime of the mergeSort algorithm by leveraging multithreading techniques. The program allows for adjusting the number of worker threads available to the mergeSort algorithm and measures the runtime to find the optimal number of threads that can optimize the algorithm's performance.</p>`,
        subsections: []
      }
    ],
    tags: ['Multithreading', 'Performance Analysis'],
    created: new Date("2019-11-01"),
    modified: new Date("2019-12-01"),
    gitLink: 'https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/C++/MergeSort',
    thumbnails: [
      "assets/thumbnails/chart.png"
    ]
  },
  {
    id: 19,
    title: 'All Possible Words from Grid',
    school: true,
    languages: [Language.java],
    sections: [
      {
        id: "top",
        content: `<p>A Java program that was developed as an extra-credit assignment for a Computer Science course. The aim of the project was to create a program that can loop through a grid of characters and find all valid words by connecting the characters in different directions.</p>`,
        subsections: []
      }
    ],
    tags: [],
    created: new Date("2018-04-01"),
    modified: new Date("2018-04-08"),
    thumbnails: []
  }
]