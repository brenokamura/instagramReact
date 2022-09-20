import React from "react";

function PostProps(props) {
  const [count, setCount] = React.useState("");
  const [counts, setCounts] = React.useState("heart-outline");
  const [icons, setIcons] = React.useState("hidden");
  const [bookmark, setBookmark] = React.useState("bookmark-outline");
  function color() {
    if (counts === "heart-outline") {
      setCount("heart");
      setCounts("heart");
      setIcons("react");
    } else {
      setCount("");
      setCounts("heart-outline");
      setIcons("hidden");
    }
  }
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.src} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div class="conteudo">
        <img onClick={() => color()} src={props.src2} />
        <ion-icon id={icons} name="heart"></ion-icon>
      </div>
      
    
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              id={count}
              onClick={() => color()}
              name={counts}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={bookmark}
              onClick={() =>
                bookmark === "bookmark-outline" 
                  ? setBookmark("bookmark")
                  : setBookmark("bookmark-outline")
              }></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.src3} />
          <div class="texto">
            Curtido por <strong>{props.texto1}</strong> e{" "}
            <strong>{props.texto2}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const post = [
    {
      usuario: "meowed",
      src: "assets/img/meowed.svg",
      src2: "assets/img/gato-telefone.svg",
      src3: "assets/img/respondeai.svg",
      texto1: "respondeai",
      texto2: "outras 101.523 pessoas"
    },
    {
      usuario: "barked",
      src: "assets/img/barked.svg",
      src2: "assets/img/dog.svg",
      src3: "assets/img/adorable_animals.svg",
      texto1: "adorable_animals",
      texto2: "outras 99.159 pessoas"
    }
  ];

  return (
    <div class="esquerda">

      <div class="Props">
        {post.map((index) => (
          <PostProps
            src={index.src}
            usuario={index.usuario}
            src2={index.src2}
            src3={index.src3}
            texto1={index.texto1}
            texto2={index.texto2}
          />
        ))}
      </div>
    </div>
  );
}