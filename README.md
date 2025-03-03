# `BlockHire`

BlockHire is a blockchain-powered job marketplace connecting **companies** with **freelancers** using **Internet Computer (ICP)** and **Internet Identity**. This platform leverages **AI-driven job matching** and **smart contracts** to enhance job filtering and secure transactions, making it superior to traditional freelance platforms.

<p align="center">
  <img src="https://i.imghippo.com/files/ucP2128Xx.png" width="100%">
</p>

**Video Demo**: [Video](https://www.youtube.com/watch?v=Vp9tliVhfn0)  
**Documents Apps**: [Documents](https://drive.google.com/drive/folders/1FJM-WmmKf0G8A7nIps7uVL7myaYXoO6C?usp=sharing)

---

## 👥 Team Members
BlockHire is developed by a dedicated team of three members:
- **Ida Bagus Dharma Abimantra** – Leader, Backend Developer  
- **Anak Agung Gede Putu Wiradarma** – Full-stack Developer  
- **I Made Sutha Raditya** – UI/UX Designer  

## 🔥 Features
- **Smart Contract-Based Agreements** – Freelancers and companies have separate accounts integrated with **blockchain**, ensuring secure transactions.  
- **AI-Powered Auto Filtering** – AI automatically matches freelancers with job posts based on their **skills and expertise**.  
- **ICP-Based Payments** – Companies must **top up their balance** before posting jobs, guaranteeing **freelancers get paid** once projects are completed.  
- **Job Posting with Smart Contracts** – Ensures **data accuracy** and **prevents fraud** in contracts.  

## 🚀 Technology Stack
- **Frontend:** React, Tailwind CSS, GSAP, Draggable React  
- **Backend:** Motoko (Deployed on ICP)  
- **AI Integration:** Gemini AI API, OpenAI GPT API  
- **Blockchain:** ICP (Internet Computer), Smart Contracts  

## 🔧 Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** (v16+ recommended) [Get It From](https://nodejs.org/)  
- **Dfinity SDK (dfx)** – To deploy on ICP [Installation Guide](https://internetcomputer.org/docs/current/developer-docs/getting-started/install)  
- **Git** [Download](https://git-scm.com/downloads)  

## 🛠 Installation
Clone the repository and install dependencies:
```sh
# Clone the repo
git clone https://github.com/AbiMantra/BlockHire.git
cd BlockHire

# Install dependencies
npm install
mops install
```

## 🌎 Environment Setup
To integrate **Gemini AI** or **GPT**, you need API keys:

- **Obtain Gemini API Key**
   - Sign up at [Google AI](https://ai.google.dev/) and generate an API key.
   - Add the key to your `/src/ECOBUDDY_backend/constants/GlobalConstants.mo` file:
     ```sh
     API_KEY=your_api_key_here
     ```
**OR**

- **Obtain OpenAI GPT API Key**
   - Sign up at [OpenAI](https://openai.com/) and generate an API key.
   - Add the key to your `/src/ECOBUDDY_backend/constants/GlobalConstants.mo` file:
     ```sh
     GPT_API_KEY=your_api_key_here
     ```

## 💻 Local Development
To start the local development server:
1. Clean dfx processes on system:
   ```bash
   dfx killall
   ```
   
2. Deploy the ICP Ledger:
   ```bash
   npm run deploy-ledger
   ```

3. Deploy project canisters:
   ```bash
   dfx deploy
   ```

Your application should now be running at `http://[your CANISTER_ID_ECOBUDDY_FRONTEND].localhost:4943`.

Topup Balance For Canister:
1. **Retrieve the Canister Principal**  
   Run the following command to get the principal of the ECOBUDDY backend canister:  
   ```sh
   dfx canister call ECOBUDDY_backend getEcobuddyPrincipal
   ```  
   Copy the generated principal.

2. **Get the Ledger Account ID**  
   Use the copied principal to obtain the corresponding ledger account ID:  
   ```sh
   dfx ledger account-id --of-canister <PASTE_PRINCIPAL_HERE>
   ```  
   Copy the generated account ID.

3. **Transfer ICP Tokens**  
   Send 20 ICP tokens to the account ID retrieved in the previous step:  
   ```sh
   dfx ledger transfer --amount 20 --memo 0 <PASTE_ACCOUNT_ID_HERE>
   ```

Topup Balance For User:
1. **Retrieve the User Wallet Address**  
   In Wallet feature, copy the wallet addres

2. **Transfer ICP Tokens**  
   Send 20 ICP tokens to the account ID retrieved in the previous step:  
   ```sh
   dfx ledger transfer --amount 20 --memo 0 <PASTE_WALLET_ADDRESS_HERE>
   ```

## 🔮 Conclusion & Future Plans
EcoBuddy aims to **bridge blockchain technology and environmental consciousness** through an engaging AI-driven chatbot. Moving forward, we plan to:
- **Eco Community** A digital platform that connects environmental enthusiasts to get to know each other, communicate, and build better relationships.
- **Eco Trash** A digital platform that helps users monetize every waste they sort and deliver to specific waste collectors, with payments made using ICP tokens.
- **3D Models** The use of 3D models in the Chatbot and Eco Tree to enhance user interaction.
- **Premium Features** Adding premium features as benefits for users subscribed to Ecobuddy.

🌍 *Join us in making a greener future with EcoBuddy!* 🚀
