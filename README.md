# 🧩 Select com Compound Components + Context

Exemplo funcional de como proteger subcomponentes (`<Option />`) para que só funcionem dentro do componente pai (`<Select />`) usando um contexto customizado inspirado no Radix UI.

---

## 📦 O que são Compound Components?

Um padrão onde um componente “pai” expõe subcomponentes diretamente:

```jsx
<Select>
  <Option value={1}>Opção 1</Option>
</Select>
```

✅ É declarativo, intuitivo e facilita a composição.

❌ Mas sem controle, subcomponentes podem ser usados fora de contexto:

```jsx
<Option>Opção fora de contexto</Option>
```

## ✅ A solução: Context API + Proteção

Este projeto utiliza um createContext customizado inspirado no Radix UI para proteger o uso dos subcomponentes:

## 🧱 Exemplo com Select e Option

```jsx
const [SelectProvider, useSelectContext] = createContext("Select");

function Select({ value, onOptionChange, children }) {

  return (
    <SelectProvider value={{ value, onOptionChange }}>
      <div>{children}</div>
    </SelectProvider>
  );
}

function Option({ value: optionValue, children }) {
  const { value, onOptionChange } = useSelectContext("Option");
  const isSelected = value === optionValue;

  return (
    <div onClick={() => onOptionChange(optionValue)}>
      {children} {isSelected && "✔️"}
    </div>
  );
}
```

✅ Se alguém usar `(<Option/>)` fora do `(<Select/>)`, um erro é lançado:

```sql
'Option' must be used within 'Select'
```

## 🧠 Inspiração: createContext do Radix UI

O Radix UI usa uma versão própria de `createContext` que oferece:

- Segurança no consumo de contexto
- Tipagem forte com `as const`
- Erros claros e úteis

🔗 Veja o código original:  
[Radix UI – create-context.tsx](https://github.com/radix-ui/primitives/blob/main/packages/react/context/src/create-context.tsx)

## 💡 No repositório oficial do Radix você também encontra ferramentas poderosas como:

- [createContextScope](https://github.com/radix-ui/primitives/blob/main/packages/react/context/src/create-context.tsx)
- [useControllableState](https://github.com/radix-ui/primitives/tree/main/packages/react/use-controllable-state)
- [useLayoutEffect](https://github.com/radix-ui/primitives/blob/main/packages/react/use-layout-effect/src/use-layout-effect.tsx) `com suporte a SSR`

## 🧪 Demonstração prática

```jsx
const [selected, setSelected] = useState(1);

<Select value={selected} onOptionChange={setSelected}>
  <Option value={0}>Option 1</Option>
  <Option value={1}>Option 2</Option>
</Select>
```

## ⚙️ Como rodar localmentecompound-component-context

```bash
git clone https://github.com/luizd30/compound-component-context.git
cd compound-component-context
npm install
npm run dev
```

## 📚 Recursos recomendados

- [Radix UI (Documentação)](https://www.radix-ui.com/themes/docs/overview/getting-started)

- [Kent C. Dodds – Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)

## 📝 Licença

Este projeto está licenciado sob a licença MIT.  
Sinta-se à vontade para usar, modificar e contribuir!

---
