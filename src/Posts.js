import React from "react";

function PostProps(props) {
  const [recebeuLike, setrecebeuLike] = React.useState(props.isLiked);
  const [bookmark, setBookmark] = React.useState("bookmark-outline");
  const [contador, setContador] = React.useState(props.texto2)

  function mudaLikeImagem() {
    if (!recebeuLike) {
      setrecebeuLike(true)
      setContador(contador + 1)
    }
    
  }

  function mudaLike() {
    if (!recebeuLike) {
      setContador(contador + 1)
    } else {
      setContador(contador - 1)
    }
    setrecebeuLike(!recebeuLike)
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
    <div class="conteudo" onClick={mudaLikeImagem}>
      <img src={props.src2} />
    </div>


    <div class="fundo">
      <div class="acoes">
        <div>
          {recebeuLike ? (
            <ion-icon onClick={mudaLike} name="heart" class="like"></ion-icon>
          ) : (
            <ion-icon onClick={mudaLike} name="heart-outline" ></ion-icon>
          )}
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
          <strong> outras {contador} pessoas</strong>
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
      texto2: 101523,
      isLiked: false
    },
    {
      usuario: "barked",
      src: "assets/img/barked.svg",
      src2: "assets/img/dog.svg",
      src3: "assets/img/adorable_animals.svg",
      texto1: "adorable_animals",
      texto2: 99159,
      isLiked: true
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
            isLiked={index.isLiked}
          />
        ))}
      </div>
    </div>
  );
}
