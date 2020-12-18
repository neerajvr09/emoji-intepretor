import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😂": "Laughing Crying",
    "😎": "Cool",
    "😩": "Weary Face",
    "😱": "Screaming Face",
    "😈": "Happy Devil",
    "😉": "Winking Face",
    "😌": "Relieved Face",
    "😤": "Mad Face",
    "😖": "Confounded Face",
    "😰": "Anxious Face with Sweat",
    "😽": "Kissing Cat",
    "🙀": "Weary Cat",
    "😿": "Crying Cat",
    "😾": "Pouting Cat",
    "💋": "Kiss Mark",
    "👋": "Waving Hand",
    "😡": "Pouting Face",
    "😠": "Angry Face",
    "😇": "Smiling Face with Halo",
    "💦": "Sweat Droplets",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns",
    "💀": "Skull",
    "🤡": "Clown Face",
    "👹": "Ogre",
    "👺": "Goblin",
    "👻": "Ghost",
    "🙈": "See-No-Evil Monkey",
    "🖖": "Vulcan Salute",
    "🐩": "Poodle",
    "🐷": "Pig Face"
  };
  var emojiWeHave = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: "Poppins" }}>Emoji Intepretor</h1>
      <img
        src="https://woztell.com/wp-content/uploads/2019/10/59076-Convertido.png"
        alt=""
      />
      <div className="emojiInput">
        <input onChange={changeHandler} />
      </div>
      <h3>{meaning}</h3>
      {emojiWeHave.map((emoji) => {
        return (
          <span
            key={emoji}
            className="listItem"
            onClick={() => clickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
      <footer className="footer">
        <div className="container">
          <div className="connect">Contact Me</div>
          <div>
            <a href="https://www.facebook.com/neerajvermadav/">
              <FontAwesomeIcon className="socialIcons" icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/neerajvr09/">
              <FontAwesomeIcon className="socialIcons" icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/neeeajverma/">
              <FontAwesomeIcon className="socialIcons" icon={faLinkedin} />
            </a>
            <a href="https://github.com/neerajvr09">
              <FontAwesomeIcon className="socialIcons" icon={faGithub} />
            </a>
          </div>
          <div className="mail">Mail : neeraj.vr09@gmail.com</div>
        </div>
      </footer>
    </div>
  );
}
