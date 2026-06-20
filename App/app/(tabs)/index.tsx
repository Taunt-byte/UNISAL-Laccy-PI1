import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>EduPulse</Text>
        <Text style={styles.subtitle}>
          O pulso da qualidade educacional
        </Text>
      </View>

      {/* BUSCA */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#64748B" />
        <TextInput
          placeholder="Buscar professor ou departamento..."
          placeholderTextColor="#64748B"
          style={styles.searchInput}
        />
      </View>

{/* MÉTRICAS DO SISTEMA */}
<View style={styles.statsContainer}>

  <View style={styles.statCard}>
    <View style={styles.iconBox}>
      <Ionicons name="school-outline" size={20} color="#2563EB" />
    </View>

    <Text style={styles.statNumber}>228+</Text>
    <Text style={styles.statLabel}>Instituições parceiras</Text>
  </View>

  <View style={styles.statCard}>
    <View style={styles.iconBox}>
      <Ionicons name="star" size={20} color="#F59E0B" />
    </View>

    <Text style={styles.statNumber}>4.6</Text>
    <Text style={styles.statLabel}>Avaliação média</Text>
  </View>

  <View style={styles.statCard}>
    <View style={styles.iconBox}>
      <Ionicons name="chatbubbles-outline" size={20} color="#10B981" />
    </View>

    <Text style={styles.statNumber}>842+</Text>
    <Text style={styles.statLabel}>Avaliações registradas</Text>
  </View>

</View>
      {/* AÇÕES PRINCIPAIS */}
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
            Feedback sobre organização acadêmica
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="business-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Instituição</Text>
          <Text style={styles.cardText}>
            Avaliação geral da experiência educacional
          </Text>
        </TouchableOpacity>

      </View>

      {/* PROFESSORES EM DESTAQUE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professores em destaque</Text>

        {[
          { nome: "Carlos Silva", area: "Engenharia", nota: 4.8 },
          { nome: "Ana Souza", area: "Computação", nota: 4.6 },
          { nome: "Marcos Lima", area: "Matemática", nota: 4.7 }
        ].map((prof, index) => (
          <View key={index} style={styles.professorCard}>
            <View style={styles.professorInfo}>
              <Ionicons name="person-circle-outline" size={40} color="#2563EB" />
              <View>
                <Text style={styles.professorName}>Prof. {prof.nome}</Text>
                <Text style={styles.professorDept}>{prof.area}</Text>
              </View>
            </View>

            <View style={styles.rating}>
              <Ionicons name="star" size={18} color="#F59E0B" />
              <Text style={styles.ratingText}>{prof.nota}</Text>
            </View>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 30,
},

statCard: {
  backgroundColor: "white",
  width: "30%",
  padding: 18,
  borderRadius: 12,
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 4,
},

iconBox: {
  backgroundColor: "#EFF6FF",
  padding: 8,
  borderRadius: 8,
  marginBottom: 8,
},

statNumber: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#0F172A",
},

statLabel: {
  fontSize: 12,
  color: "#64748B",
  textAlign: "center",
  marginTop: 2,
},
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
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
    marginBottom: 20,
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
    alignItems: "center",
    marginBottom: 10,
  },

  professorInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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