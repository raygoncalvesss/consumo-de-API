import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um filme (film) como propriedade
export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      {/* Imagem do filme (pôster vertical) */}
      <Image source={{ uri: film.image }} style={styles.image} />

      {/* Bloco com as informações do filme */}
      <View style={styles.name}>
        {/* Título principal em inglês */}
        <Text style={styles.title}>
          {film.name ?? "Título não disponível"}
        </Text>

        {/* Título original em japonês */}
        <Text style={styles.text}>
         🏠 house: {film.house ?? "Título original não disponível"}
        </Text>

        {/* Título romanizado (em alfabeto latino) */}
        <Text style={styles.subtitleSmall}>
         👤 specie: {film.species ?? "Romanização não disponível"}
        </Text>

        {/* Descrição da história */}
        <Text style={styles.text}>
          📝 description: {film.ancestry ?? "Descrição não disponível"}
        </Text>

        {/* Diretor e produtor */}
        <Text style={styles.text}>
          🎬 actor/actress: {film.actor ?? "Não informado"}
        </Text>

        {/* Data de lançamento e duração */}
        <Text style={styles.text}>
          📅 birthday: {film.dateOfBirth ?? "Não informado"}
        </Text>

      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%", 
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbbbbb",
    marginTop: 4,
    fontStyle: "italic",
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 2,
    fontStyle: "justify",
  },
});
