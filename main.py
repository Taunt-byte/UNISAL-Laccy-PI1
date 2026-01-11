# Explicação:
# A função gerar_pares gera números pares até o limite especificado.
# A list comprehension itera sobre esses números pares e calcula o quadrado de cada um,
# armazenando os resultados na lista pares_ao_quadrado.
# A saída final é uma lista dos quadrados dos números pares menores que 10.

def gerar_pares(limite):
    for numero in range(limite):
        if numero % 2 == 0:
            yield numero

# Usando list comprehension com um generator
pares_ao_quadrado = [n**2 for n in gerar_pares(10)]

print(pares_ao_quadrado)
# Saída: [0, 4, 16, 36, 64]
