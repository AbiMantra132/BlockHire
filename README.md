# `BlockHire`

BlockHire is a blockchain-powered job marketplace connecting **companies** with **freelancers** using **Internet Computer (ICP)**. This platform leverages **AI-driven job matching** where the AI instantly shortlists candidates and dynamically optimizes hiring workflows, slashing recruitment time while boosting retention and **smart contracts** to ensure secure transactions, making it superior to traditional freelance platforms. Combined with **Internet Identity** for secure, passwordless access, BlockHire eliminates fraud, delays, and breaches, offering a transparent, efficient alternative to traditional platform

<p align="center">
  <img src="https://i.imghippo.com/files/iDT6648Nto.png" alt="" border="0">
</p>

**Video Demo**: [Video](https://youtu.be/GSCzvJTQ6Hg?si=D_ssT6ntcn4UJ_EN)  
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

Your application should now be running at `http://[your CANISTER_ID_BlockHire_FRONTEND].localhost:4943`.
 
## 🔮 Conclusion & Future Plans
BlockHire aims to **bridge blockchain technology and environmental consciousness** through an engaging AI-driven chatbot. Moving forward, we plan to:
- **Freelancer Reputation System** AI-driven ratings and reviews to ensure high-quality freelancers.
- **Premium AI Job Matching** More advanced AI algorithms to improve job matching accuracy.
- *Video Call Integration**  Built-in **secure video calls** for real-time communication between freelancers and companies, ensuring **better collaboration** and **project discussions**.
- **Subscription Plans** Offering premium features for companies and freelancers.

💼 Join us in building a smarter and more secure freelance ecosystem with BlockHire! 🚀
