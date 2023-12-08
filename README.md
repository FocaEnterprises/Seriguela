<h1 align=center>Seriguela</h1>

---

## Que isso?

Seriguela é uma mini API para conversão de moedas (não leva a taxa de câmbio em consideração). O projeto utiliza a API da [HG Brasil](https://hgbrasil.com/), é necessário configurar o URL e a Key desta API nas variáveis de ambiente.

## Executando

```bash
# Instalar dependências
npm install

# Executar
node .
```

## Rotas

`GET /exchange/:moeda`

Retorna a cotação atual da moeda fornecida, ou uma mensagem de erro caso não exista.

Exemplo de esposta:
```json
{
  "exchangeRate": "4.93",
  "fromCurrency": "USD",
  "toCurrency": "BRL"
}
```

<br>
<br>

`GET /exchange/:moeda/:valor`

Retorna a conversão do valor na moeda especificada (em relação ao Real).

Exemplo de resposta:
```json
{
  "fromCurrency": "BRL",
  "toCurrency": "USD",
  "fromValue": "10.00",
  "exchangeRate": "4.93",
  "exchangedValue": "49.29"
}
```

<br>
<br>

`GET /exchange/:moedaOrigem/:moedaDestino/:valor`

Retorna a conversão do valor da moeda de origem para a moeda de destino.
Exemplo de resposta:
```json
{
  "fromCurrency": "BRL",
  "toCurrency": "USD",
  "fromValue": "15.00",
  "exchangeRate": "0.20",
  "exchangedValue": "3.04"
}
```
