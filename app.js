// SIE Comprehensive Flashcard Data
// Based on Kaplan Manual 4th Edition

const FLASHCARDS = [
  // --- UNIT 1: Equity Securities ---
  {
    id: "u1_1", unit: "U1", topic: "Common Stock",
    question: "What is the order of liquidation priority if a corporation goes bankrupt?",
    answer: "1. Secured Debt, 2. Unsecured Debt (Debentures), 3. Subordinated Debt, 4. Preferred Stock, 5. Common Stock.",
    sieLikely: true
  },
  {
    id: "u1_2", unit: "U1", topic: "Rights vs Warrants",
    question: "What is the difference between a Right and a Warrant?",
    answer: "Rights: Short-term (30-45 days), issued below market price to existing shareholders. Warrants: Long-term (years), issued above market price, often attached to bonds as a 'sweetener'.",
    sieLikely: true
  },
  {
    id: "u1_3", unit: "U1", topic: "ADRs",
    question: "What is an ADR (American Depositary Receipt) and what specific risk does it carry?",
    answer: "A receipt for foreign stock held in a US bank, trading in US markets. It carries Currency Risk (if the foreign currency drops vs the dollar, the ADR value drops).",
    sieLikely: true
  },
  {
    id: "u1_4", unit: "U1", topic: "Preferred Stock",
    question: "What is the primary benefit of Cumulative Preferred Stock?",
    answer: "If the company skips a dividend, it accumulates. The company must pay all 'dividends in arrears' to cumulative preferred holders before paying anything to common stockholders."
  },

  // --- UNIT 2: Corporate Actions ---
  {
    id: "u2_1", unit: "U2", topic: "Stock Splits",
    question: "In a 2-for-1 stock split, what happens to the number of shares and the price per share?",
    answer: "The number of shares doubles, and the price per share is cut in half. The total market value of the position remains the same.",
    sieLikely: true
  },
  {
    id: "u2_2", unit: "U2", topic: "Buybacks",
    question: "What is a stock buyback?",
    answer: "When a company repurchases its own shares in the open market. This reduces the number of outstanding shares and typically increases Earnings Per Share (EPS)."
  },

  // --- UNIT 3: Debt Securities ---
  {
    id: "u3_1", unit: "U3", topic: "Bond Yields",
    question: "What is the inverse relationship between bond prices and interest rates?",
    answer: "When interest rates rise, bond prices fall. When interest rates fall, bond prices rise.",
    sieLikely: true
  },
  {
    id: "u3_2", unit: "U3", topic: "Yield Rankings",
    question: "If a bond is trading at a DISCOUNT, rank the yields from lowest to highest.",
    answer: "Nominal (Coupon) Yield -> Current Yield -> Yield to Maturity (YTM) -> Yield to Call (YTC).",
    sieLikely: true
  },
  {
    id: "u3_3", unit: "U3", topic: "Muni Tax",
    question: "How is interest on Municipal Bonds taxed?",
    answer: "It is generally exempt from Federal income tax. It may also be exempt from state tax if the investor lives in the issuing state.",
    sieLikely: true
  },
  {
    id: "u3_4", unit: "U3", topic: "Treasuries",
    question: "Which Treasury security is short-term, issued at a discount, and matures at par?",
    answer: "Treasury Bills (T-Bills). They have maturities of 4, 8, 13, 26, and 52 weeks.",
    sieLikely: true
  },

  // --- UNIT 4: Investment Companies ---
  {
    id: "u4_1", unit: "U4", topic: "Mutual Funds",
    question: "What is the difference between an Open-End Fund (Mutual Fund) and a Closed-End Fund?",
    answer: "Open-End: Continuous offering, bought/sold at NAV (forward pricing), redeemable. Closed-End: Fixed number of shares, trades on exchange like stock, price determined by supply/demand."
  },
  {
    id: "u4_2", unit: "U4", topic: "Share Classes",
    question: "Describe Class A, B, and C mutual fund shares.",
    answer: "Class A: Front-end load (best for long-term/large investments). Class B: Back-end load (CDSC) that declines over time. Class C: Level load (12b-1 fees), best for short-term."
  },
  {
    id: "u4_3", unit: "U4", topic: "Breakpoints",
    question: "What is a 'breakpoint' and a 'letter of intent' (LOI)?",
    answer: "Breakpoint: A discount on sales charges for investing a certain amount. LOI: Allows an investor 13 months to reach a breakpoint amount.",
    sieLikely: true
  },

  // --- UNIT 5: Options ---
  {
    id: "u5_1", unit: "U5", topic: "Basic Rights",
    question: "What right does the BUYER of a CALL have?",
    answer: "The right to BUY the stock at the strike price.",
    sieLikely: true
  },
  {
    id: "u5_2", unit: "U5", topic: "Hedging",
    question: "How do you hedge (protect) a Long Stock position?",
    answer: "Buy a Put Option (Protective Put). This gives you the right to sell the stock at a specific price if the market crashes.",
    sieLikely: true
  },
  {
    id: "u5_3", unit: "U5", topic: "Income Strategy",
    question: "What option strategy generates income on a stock you already own?",
    answer: "Writing (Selling) a Covered Call.",
    sieLikely: true
  },

  // --- UNIT 6: Other Investment Types ---
  {
    id: "u6_1", unit: "U6", topic: "DPPs",
    question: "What is the major risk of a Direct Participation Program (DPP) / Limited Partnership?",
    answer: "Liquidity risk. There is no active secondary market for these interests, so they are hard to sell.",
    sieLikely: true
  },
  {
    id: "u6_2", unit: "U6", topic: "REITs",
    question: "How does a REIT avoid corporate taxation?",
    answer: "By distributing at least 90% of its taxable income to shareholders annually.",
    sieLikely: true
  },

  // --- UNIT 7: Issuing Securities ---
  {
    id: "u7_1", unit: "U7", topic: "Securities Act of 1933",
    question: "What is the main purpose of the Securities Act of 1933?",
    answer: "To require full and fair disclosure in connection with the sale of securities to the public (Paper Act). It requires registration of new issues.",
    sieLikely: true
  },
  {
    id: "u7_2", unit: "U7", topic: "Exemptions",
    question: "Under Regulation D (Private Placement), who can invest?",
    answer: "An unlimited number of Accredited Investors and up to 35 Non-Accredited investors.",
    sieLikely: true
  },
  {
    id: "u7_3", unit: "U7", topic: "Cooling-Off Period",
    question: "What can a registered rep do during the 20-day cooling-off period?",
    answer: "They can accept Indications of Interest (IOI) and distribute the Preliminary Prospectus (Red Herring). They CANNOT accept money or take orders."
  },

  // --- UNIT 8: Trading Securities ---
  {
    id: "u8_1", unit: "U8", topic: "Market Makers",
    question: "What is the difference between a Broker (Agent) and a Dealer (Principal)?",
    answer: "Broker (Agent): Matches buyers and sellers for a commission (ABC: Agency, Broker, Commission). Dealer (Principal): Buys/sells from own inventory for a markup/markdown."
  },
  {
    id: "u8_2", unit: "U8", topic: "Order Types",
    question: "What is the difference between a Market Order and a Limit Order?",
    answer: "Market Order: Guaranteed execution, but price is unknown. Limit Order: Guaranteed price (or better), but execution is not guaranteed."
  },

  // --- UNIT 9: Basic Accounts ---
  {
    id: "u9_1", unit: "U9", topic: "Joint Accounts",
    question: "What is the difference between JTWROS and TIC?",
    answer: "JTWROS (Joint Tenants With Rights of Survivorship): Assets go to the survivor. TIC (Tenants in Common): Assets go to the decedent's estate/heirs.",
    sieLikely: true
  },
  {
    id: "u9_2", unit: "U9", topic: "Fiduciary",
    question: "What is a fiduciary account?",
    answer: "An account where a third party (custodian, trustee) manages assets for the benefit of the owner (minor, beneficiary). They must follow the Prudent Investor Rule."
  },

  // --- UNIT 10: Retirement Plans ---
  {
    id: "u10_1", unit: "U10", topic: "Traditional vs Roth",
    question: "Compare tax treatment of Traditional vs. Roth IRAs.",
    answer: "Traditional: Pre-tax contributions (deductible), taxable withdrawals. Roth: After-tax contributions, tax-free withdrawals (if qualified).",
    sieLikely: true
  },
  {
    id: "u10_2", unit: "U10", topic: "RMDs",
    question: "When must Required Minimum Distributions (RMDs) begin for a Traditional IRA?",
    answer: "By April 1st of the year following the year the owner turns 73.",
    sieLikely: true
  },

  // --- UNIT 11: Account Features ---
  {
    id: "u11_1", unit: "U11", topic: "Regulation T",
    question: "What is the Regulation T initial margin requirement?",
    answer: "50%. The customer must deposit 50% of the purchase price.",
    sieLikely: true
  },
  {
    id: "u11_2", unit: "U11", topic: "Hypothecation",
    question: "What is the hypothecation agreement?",
    answer: "Part of the margin agreement where the customer pledges securities as collateral for the loan."
  },

  // --- UNIT 12: Economics ---
  {
    id: "u12_1", unit: "U12", topic: "Fed Tools",
    question: "What are the three main tools of the Federal Reserve?",
    answer: "1. Open Market Operations (Buying/Selling bonds - most used). 2. Discount Rate. 3. Reserve Requirement (least used).",
    sieLikely: true
  },
  {
    id: "u12_2", unit: "U12", topic: "Interest Rates",
    question: "If the Fed buys bonds in the open market, what happens to the money supply and interest rates?",
    answer: "Money supply increases (easing), and interest rates decrease.",
    sieLikely: true
  },

  // --- UNIT 13: Returns & Taxes ---
  {
    id: "u13_1", unit: "U13", topic: "Cost Basis",
    question: "What is the 'cost basis' of a stock?",
    answer: "The original purchase price plus any commissions or fees paid. It is used to calculate capital gains or losses."
  },
  {
    id: "u13_2", unit: "U13", topic: "Wash Sale",
    question: "What is the Wash Sale Rule?",
    answer: "You cannot claim a capital loss if you repurchase the same (or substantially identical) security within 30 days before or after the sale.",
    sieLikely: true
  },

  // --- UNIT 14: Recommendations ---
  {
    id: "u14_1", unit: "U14", topic: "Risk Types",
    question: "What is the difference between Systematic and Nonsystematic risk?",
    answer: "Systematic (Market Risk): Cannot be diversified away. Nonsystematic (Business Risk): Can be reduced through diversification.",
    sieLikely: true
  },
  {
    id: "u14_2", unit: "U14", topic: "Regulation BI",
    question: "What is Regulation Best Interest (Reg BI)?",
    answer: "It requires broker-dealers to act in the best interest of retail customers when making a recommendation, prioritizing the customer's interests above the firm's."
  },

  // --- UNIT 15: Registration ---
  {
    id: "u15_1", unit: "U15", topic: "U4/U5",
    question: "What are Forms U4 and U5?",
    answer: "U4: Used to register a person with FINRA (hiring). U5: Used to terminate registration (firing/quitting).",
    sieLikely: true
  },
  {
    id: "u15_2", unit: "U15", topic: "CE",
    question: "How often must the Regulatory Element of Continuing Education be completed?",
    answer: "Annually, by December 31st of each year.",
    sieLikely: true
  },

  // --- UNIT 16: Regulators ---
  {
    id: "u16_1", unit: "U16", topic: "SIPC",
    question: "What does SIPC cover?",
    answer: "It protects customers if a broker-dealer goes bankrupt. Coverage is up to $500,000 per separate customer, of which up to $250,000 can be cash.",
    sieLikely: true
  },
  {
    id: "u16_2", unit: "U16", topic: "FinCEN",
    question: "What reports must be filed for anti-money laundering (AML)?",
    answer: "CTR (Currency Transaction Report) for cash > $10k. SAR (Suspicious Activity Report) for suspicious transactions >= $5k."
  },

  // --- UNIT 17: SROs ---
  {
    id: "u17_1", unit: "U17", topic: "FINRA vs MSRB",
    question: "Does the MSRB engage in enforcement?",
    answer: "No. The MSRB writes the rules for municipal securities, but FINRA (for BDs) and the SEC/Fed (for banks) enforce them.",
    sieLikely: true
  },

  // --- UNIT 18: Communications ---
  {
    id: "u18_1", unit: "U18", topic: "Retail Comms",
    question: "What is the definition of Retail Communication?",
    answer: "Written/electronic communication distributed to MORE than 25 retail investors in a 30-day period. It requires Principal approval before use.",
    sieLikely: true
  },
  {
    id: "u18_2", unit: "U18", topic: "Retention",
    question: "How long must most broker-dealer records be retained?",
    answer: "Generally 3 years (confirmations, retail comms). Customer account records and complaints must be kept for 6 years.",
    sieLikely: true
  },

  // --- UNIT 19: Ethics ---
  {
    id: "u19_1", unit: "U19", topic: "Insider Trading",
    question: "What are the penalties for Insider Trading?",
    answer: "Civil penalties up to 3x profit gained or loss avoided (Treble damages). Criminal penalties up to $5 million and 20 years in prison."
  },
  {
    id: "u19_2", unit: "U19", topic: "Exploitation",
    question: "If a firm suspects financial exploitation of a senior (65+), what can they do?",
    answer: "They can place a temporary hold on disbursements (not trades) for up to 15 days and notify the Trusted Contact Person.",
    sieLikely: true
  }
];

// State Management
const state = {
  mode: "home",
  filterType: "all", // "all", "unit", "review", "sie"
  filterValue: "ALL",
  flashIndex: 0,
  showAnswer: false,
  reviewSet: new Set(),
  quizOrder: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizFinished: false,
  quizResponses: []
};

// Persistence
(function loadReviewSet() {
  try {
    const raw = localStorage.getItem("sie_review_ids_v2");
    if (raw) state.reviewSet = new Set(JSON.parse(raw));
  } catch (e) {}
})();

function saveReviewSet() {
  localStorage.setItem("sie_review_ids_v2", JSON.stringify([...state.reviewSet]));
}

// Data Helpers
function getFilteredCards(type, value) {
  if (type === "all") return FLASHCARDS.slice();
  if (type === "unit") return FLASHCARDS.filter(c => c.unit === value);
  if (type === "sie") return FLASHCARDS.filter(c => c.sieLikely);
  if (type === "review") return FLASHCARDS.filter(c => state.reviewSet.has(c.id));
  return FLASHCARDS.slice();
}

function getLabel(type, value) {
  if (type === "unit") {
    // Find unit label from cards if possible, or return value
    return "Unit " + value.replace("U", "");
  }
  if (type === "sie") return "High Probability Topics";
  if (type === "review") return "Marked for Review";
  return "All Topics";
}

// View Management
function showView(viewId) {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("flashcardsView").classList.add("hidden");
  document.getElementById("quizView").classList.add("hidden");
  document.getElementById(viewId).classList.remove("hidden");
}

// Flashcards Logic
function startFlashcards(type, value) {
  state.mode = "flash";
  state.filterType = type;
  state.filterValue = value;
  state.flashIndex = 0;
  state.showAnswer = false;
  showView("flashcardsView");
  renderFlashcard();
}

function renderFlashcard() {
  const cards = getFilteredCards(state.filterType, state.filterValue);
  const topicEl = document.getElementById("cardTopic");
  const qEl = document.getElementById("cardQuestion");
  const aEl = document.getElementById("cardAnswer");
  const ctxEl = document.getElementById("cardContext");
  const countEl = document.getElementById("flashCounter");
  const labelEl = document.getElementById("flashFilterLabel");
  const markBtn = document.getElementById("markReviewBtn");
  const badgeEl = document.getElementById("sieBadge");

  labelEl.textContent = getLabel(state.filterType, state.filterValue);

  if (cards.length === 0) {
    qEl.textContent = "No cards available in this set.";
    aEl.textContent = "";
    aEl.classList.remove("visible");
    ctxEl.textContent = "";
    countEl.textContent = "";
    markBtn.disabled = true;
    return;
  }

  const card = cards[state.flashIndex];
  topicEl.textContent = `Unit ${card.unit.replace("U","")} - ${card.topic}`;
  qEl.textContent = card.question;
  aEl.textContent = card.answer;
  ctxEl.textContent = ""; // Simplified context for cleaner look
  
  // SIE Badge
  if (card.sieLikely) {
    badgeEl.classList.remove("hidden");
  } else {
    badgeEl.classList.add("hidden");
  }

  counterEl.textContent = `Card ${state.flashIndex + 1} / ${cards.length}`;

  if (state.showAnswer) {
    aEl.classList.add("visible");
  } else {
    aEl.classList.remove("visible");
  }

  markBtn.disabled = false;
  markBtn.textContent = state.reviewSet.has(card.id) ? "Unmark Review" : "Mark for Review";
}

// Quiz Logic
function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz(type, value) {
  state.mode = "quiz";
  state.filterType = type;
  state.filterValue = value;
  
  const cards = getFilteredCards(type, value);
  const indices = cards.map((_, idx) => idx);
  state.quizOrder = shuffleArray(indices);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizFinished = false;
  state.quizResponses = [];

  document.getElementById("nextQuestion").textContent = "Next";
  showView("quizView");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const cards = getFilteredCards(state.filterType, state.filterValue);
  const labelEl = document.getElementById("quizFilterLabel");
  const progressEl = document.getElementById("quizProgress");
  const qEl = document.getElementById("quizQuestion");
  const optsEl = document.getElementById("quizOptions");
  const feedEl = document.getElementById("quizFeedback");
  const scoreEl = document.getElementById("quizScore");
  const reviewEl = document.getElementById("quizReview");

  labelEl.textContent = getLabel(state.filterType, state.filterValue);
  optsEl.innerHTML = "";
  feedEl.textContent = "";
  reviewEl.innerHTML = "";

  if (!cards.length) {
    qEl.textContent = "No questions available.";
    return;
  }

  const idx = state.quizOrder[state.quizIndex];
  const card = cards[idx];

  qEl.textContent = card.question;
  progressEl.textContent = `Question ${state.quizIndex + 1} of ${state.quizOrder.length}`;
  scoreEl.textContent = `Score: ${state.quizScore}`;

  // Generate answers
  const wrongPool = FLASHCARDS.filter(c => c.id !== card.id).map(c => c.answer);
  const distractors = shuffleArray(wrongPool).slice(0, 3);
  const allOptions = shuffleArray([card.answer, ...distractors]);

  allOptions.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleQuizAnswer(btn, opt, card);
    optsEl.appendChild(btn);
  });
}

function handleQuizAnswer(btn, selected, card) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const isCorrect = (selected === card.answer);
  if (isCorrect) {
    btn.classList.add("selected", "correct");
    state.quizScore++;
    document.getElementById("quizFeedback").textContent = "Correct!";
  } else {
    btn.classList.add("selected", "incorrect");
    document.getElementById("quizFeedback").textContent = `Incorrect. Answer: ${card.answer}`;
  }
  document.getElementById("quizScore").textContent = `Score: ${state.quizScore}`;
  
  state.quizResponses.push({ q: card.question, a: selected, correct: card.answer, isCorrect });
}

function showSummary() {
  const total = state.quizOrder.length;
  const percent = Math.round((state.quizScore / total) * 100);
  
  document.getElementById("quizQuestion").textContent = "Quiz Complete";
  document.getElementById("quizOptions").innerHTML = "";
  document.getElementById("quizProgress").textContent = `Result: ${state.quizScore}/${total} (${percent}%)`;
  document.getElementById("quizFeedback").textContent = "";
  
  const reviewEl = document.getElementById("quizReview");
  const missed = state.quizResponses.filter(r => !r.isCorrect);
  
  if (missed.length === 0) {
    reviewEl.innerHTML = "<p>Perfect score! Great job.</p>";
  } else {
    reviewEl.innerHTML = "<h4>Review Missed Questions:</h4>" + 
      missed.map((m, i) => `
        <div class="quiz-review-item">
          <strong>${i+1}. ${m.q}</strong><br>
          <span style="color:red">Your answer: ${m.a}</span><br>
          <span style="color:green">Correct: ${m.correct}</span>
        </div>
      `).join("");
  }
  
  state.quizFinished = true;
  document.getElementById("nextQuestion").textContent = "Restart";
}

// Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Menu
  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      const type = btn.dataset.filterType;
      const val = btn.dataset.filterValue;
      if (mode === "flash") startFlashcards(type, val);
      if (mode === "quiz") startQuiz(type, val);
    });
  });

  // Flashcard Nav
  document.getElementById("prevCard").onclick = () => {
    if (state.flashIndex > 0) { state.flashIndex--; state.showAnswer = false; renderFlashcard(); }
  };
  document.getElementById("nextCard").onclick = () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (state.flashIndex < cards.length - 1) { state.flashIndex++; state.showAnswer = false; renderFlashcard(); }
  };
  document.getElementById("toggleAnswer").onclick = () => {
    state.showAnswer = !state.showAnswer;
    renderFlashcard();
  };
  document.getElementById("markReviewBtn").onclick = () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    const card = cards[state.flashIndex];
    if (state.reviewSet.has(card.id)) state.reviewSet.delete(card.id);
    else state.reviewSet.add(card.id);
    saveReviewSet();
    renderFlashcard();
  };
  document.getElementById("backFromFlash").onclick = () => showView("homeView");

  // Quiz Nav
  document.getElementById("nextQuestion").onclick = () => {
    if (state.quizFinished) { startQuiz(state.filterType, state.filterValue); return; }
    if (!state.quizAnswered) return;
    
    state.quizIndex++;
    if (state.quizIndex >= state.quizOrder.length) showSummary();
    else { state.quizAnswered = false; renderQuizQuestion(); }
  };
  document.getElementById("backFromQuiz").onclick = () => showView("homeView");

  showView("homeView");
});
