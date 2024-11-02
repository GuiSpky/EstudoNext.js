"use client"
import Image from "next/image"
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./style"
import { IProduto } from "@/interfaces"



export const Card = (props: IProduto) => {
    return(
        <CardBody>
            <Image 
                src={'https://raw.githubusercontent.com/profchines/Imagens/refs/heads/main/Imagens/' 
                    + props.imagemg} 
                alt={props.nome}
                width={250}
                height={200}/>
            <Title>{props.nome}</Title>
            <TitlePreco>{props.valor}</TitlePreco>
            <TextPromo>{props.promo}</TextPromo>
            <Button
                onClick={() => {
                    return(
                        
                    )
                }}
            >
                <TextButton>Detalhes</TextButton>
            </Button>
        </CardBody>
    )
}