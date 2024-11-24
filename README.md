<h1 align="center">✨ 𝕂𝕒𝕤𝕒𝕕𝕒 𝔼𝕟𝕔𝕣𝕪𝕡𝕥𝕚𝕠𝕟 ✨</h1>

<p align="center">
  <img src="https://img.shields.io/github/stars/H4cK3dR4Du/Kasada-Encryption.svg?style=for-the-badge&labelColor=black&color=c1121f&logo=IOTA"/>
  <img src="https://img.shields.io/github/languages/top/H4cK3dR4Du/Kasada-Encryption.svg?style=for-the-badge&labelColor=black&color=c1121f&logo=javascript"/>
</p>

<h2 align="center"> 📝 Description 📝 </h2>

<p align="center">
    Explanation of how the encryption of kasada.io works, the anti-bot used by various platforms such as Nike, Twitch, Kick, and others.
</p>

<p align="center">
  <b><big>❤️ Made By H4cK3dR4Du ❤️</big></b>
</p>

<h2 align="center"> ⚔️ Kasada Analysis ⚔️</h2>
> [!NOTE]  
> In this repository, I will show where the encryption function for kasada.io is located and how to encrypt the payload.
- Kasada has a VM with a total of 96 opcodes, referred to as 'Operation codes.' These are basic instructions that a virtual machine (VM) executes to perform specific operations, such as calculations, control flow, or data manipulation. They act as the 'language' the VM interprets to run programs.

<h2 align="center"> 🌐 Kasada Encryption 🌐</h2>
> [!NOTE]  
> The key is constructed using several opcodes that perform byte operations, and be careful because the operations change every time.

1. **Encryption Location:** Kasada encrypts a fingerprint with a random order in each request. This is done through encryption code hidden in the VM bytecode, assigned to the variable 'A'. The opcode responsible for accessing the encryption code is a(n, _(u, r, l)).
- Example of how the code looks:
```
function(n, e, a) {
    var _ = e(n)
        , u = e(n)
        , r = e(n)
        , l = e(n);
    a(n, _(u, r, l)) // Add logpoint here -> _, u, r, l
}
```
2. **Access to the encryption code:** To access the encryption code, you need to set a logpoint with '_, u, r, l' as I mentioned before. In the console, you'll see many different logs, and one of them will contain 3 arrays: one with a length of 8, another with 16, and another with +10000 length (the fingerprint). Above the arrays, you'll find the encryption code; simply click on it to access it. Now you're ready to set breakpoints inside the code.
- Example what you should see:
![logpoint](https://github.com/user-attachments/assets/ae8c7a71-57c6-4f43-9c7e-46faf3dc508b)

3. **Debugging encryption:** Once inside the code, I recommend setting a breakpoint at 'return x'. After doing that, refresh the page, and you'll be able to start debugging the encryption.
- Arrays explaination:
```
16 length array (key) -> [54, 158, 217, 253, 242, 220, 79, 21, 189, 32, 10, 115, 60, 254, 199, 89] (Variable: i)
8 length array (iv) -> [48, 79, 172, 189, 58, 97, 189, 159] (Variable: m)
x length array (fingerprint) -> [...] (Variable: p)
```

4. **Decoding the fingerprint:** To decode the fingerprint and see what Kasada sends through the body of /tl, we can use a very simple command in the console:
```
// 'p' is the payload encoded in Uint8Array
new TextDecoder().decode(p)
```
- Output:
![payload_decoded](https://github.com/user-attachments/assets/13d90f88-fa46-4826-9ef5-d09f040252dc)

5. **Fingerprint info:**
> [!WARNING]
> The fingerprint always has a different fp order in each request. If you make it static, you won’t receive 'reload: true' in the /tl response. The key must be constructed and the bytes parsed correctly, as I mentioned earlier, with the opcodes that operate on bytes. If you don't do this, it's very likely that your solver will be flagged and won't work.

<h2 align="center"> 💭 Extra Information 💭</h2>
- In the payload, there are 2 values that are NOT static. To obtain them, you must find them within the decoded VM bytecode. If you have doubts, you can debug a piece of ips.js where they use slice to get those values.
```
E.t = function(r, e) {
    return E.r.slice(e, e + r) // Here
}
```
- If you don't know which 2 values I'm referring to, I'll leave an image here so you can see them yourself:
![values](https://github.com/user-attachments/assets/f73a2e91-79c0-46b4-9971-7088faaee284)

<h2 align="center"> 🤷‍♂️ Issues / Doubts 🤷‍♂️</h2>

- **If you have any questions do not hesitate to enter my discord: https://discord.gg/raducord**
- **Or if you have any error do not forget to report it in: [issues](https://github.com/H4cK3dR4Du/Kasada-Encryption/issues/new)**

<h2 align="center"> 🚀 Kasada Encryption 🚀 </h2>

### - Requirements And Files:

- **Download Python [here](https://www.python.org/downloads/)**