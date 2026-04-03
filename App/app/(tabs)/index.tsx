import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Avaliação Acadêmica</Text>
        <Text style={styles.subtitle}>
          Avalie professores e ajude a melhorar o ensino
        </Text>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#64748B" />
        <TextInput
          placeholder="Buscar professor..."
          placeholderTextColor="#64748B"
          style={styles.searchInput}
        />
      </View>

      {/* Cards principais */}
      <View style={styles.menu}>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="person-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Avaliar Professores</Text>
          <Text style={styles.cardText}>
            Avalie didática, conteúdo e metodologia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="school-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Departamentos</Text>
          <Text style={styles.cardText}>
            Avalie organização e estrutura acadêmica
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="business-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Instituição</Text>
          <Text style={styles.cardText}>
            Compartilhe sua experiência geral
          </Text>
        </TouchableOpacity>

      </View>

      {/* Lista exemplo de professores */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professores em destaque</Text>

        <View style={styles.professorCard}>
          <View>
            <Text style={styles.professorName}>Prof. Carlos Silva</Text>
            <Text style={styles.professorDept}>Engenharia</Text>
          </View>

          <View style={styles.rating}>
            <Ionicons name="star" size={18} color="#F59E0B" />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
        </View>

        <View style={styles.professorCard}>
          <View>
            <Text style={styles.professorName}>Prof. Ana Souza</Text>
            <Text style={styles.professorDept}>Computação</Text>
          </View>

          <View style={styles.rating}>
            <Ionicons name="star" size={18} color="#F59E0B" />
            <Text style={styles.ratingText}>4.6</Text>
          </View>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#94A3B8",
    marginTop: 5,
  },

  searchBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  menu: {
    gap: 15,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },

  cardText: {
    color: "#64748B",
    marginTop: 3,
  },

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15,
  },

  professorCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  professorName: {
    fontWeight: "bold",
    fontSize: 16,
  },

  professorDept: {
    color: "#64748B",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: "bold",
  },

});