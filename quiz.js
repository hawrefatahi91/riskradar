const quiz = [
  {
    category: "Phishing",
    q: "You receive an email from 'IT Support' saying your password expires today and you must click a link to keep access. What is the BEST first step?",
    options: [
      "Click the link quickly to avoid losing access",
      "Reply with your password so they can fix it",
      "Verify the request using an official channel (internal portal/phone) before clicking anything",
      "Forward it to friends to warn them"
    ],
    answer: 2,
    explain: "Phishing uses urgency. Always verify through a trusted channel (not the email link) before taking action."
  },
  {
    category: "Phishing",
    q: "Which email detail is the STRONGEST sign of phishing?",
    options: [
      "The email includes your name",
      "The sender address domain is slightly misspelled (e.g., micr0soft.com)",
      "The email contains a logo",
      "The email is written in English"
    ],
    answer: 1,
    explain: "Lookalike domains are a classic phishing technique (typos, extra characters, swapped letters)."
  },
  {
    category: "Links & Websites",
    q: "Before clicking a link, what should you do?",
    options: [
      "Hover/tap-and-hold to preview the real URL and check the domain",
      "Only check the email subject line",
      "Trust links from anyone with a friendly tone",
      "Click it and see if the site looks normal"
    ],
    answer: 0,
    explain: "Previewing the real URL helps you confirm the true destination domain before you click."
  },
  {
    category: "Attachments",
    q: "A colleague sends an unexpected attachment named 'Invoice.zip'. What is safest?",
    options: [
      "Open it if the message says 'urgent'",
      "Scan it and verify with the colleague via chat/phone before opening",
      "Forward it to your manager",
      "Rename it to PDF and open"
    ],
    answer: 1,
    explain: "Unexpected compressed files can contain malware. Verify out-of-band and scan first."
  },
  {
    category: "Passwords",
    q: "Which password is strongest?",
    options: [
      "Password123!",
      "Summer2026",
      "P@ssw0rd",
      "correct-horse-battery-staple (long passphrase)"
    ],
    answer: 3,
    explain: "Length matters a lot. Long passphrases are harder to crack than short 'complex' passwords."
  },
  {
    category: "2FA/MFA",
    q: "Why is MFA (2FA) important?",
    options: [
      "It makes passwords unnecessary",
      "It adds a second proof so stolen passwords alone aren’t enough",
      "It prevents all malware",
      "It speeds up logins"
    ],
    answer: 1,
    explain: "MFA blocks many account takeovers when passwords are leaked or phished."
  },
  {
    category: "MFA Prompts",
    q: "You get an MFA push notification you didn’t request. What should you do?",
    options: [
      "Approve it to make it stop",
      "Ignore it and do nothing else",
      "Deny it and report it; change your password if you suspect compromise",
      "Wait for a second notification"
    ],
    answer: 2,
    explain: "Unexpected MFA prompts can mean someone has your password and is trying to log in."
  },
  {
    category: "Social Engineering",
    q: "A caller says they’re from the bank and asks you to confirm a code sent to your phone. What is true?",
    options: [
      "It’s safe if they know your name",
      "Never share one-time codes; hang up and call the bank using an official number",
      "Share the code if you’re in a hurry",
      "Send the code by email instead"
    ],
    answer: 1,
    explain: "Scammers often try to capture one-time codes. Always use official contact methods."
  },
  {
    category: "Email Safety",
    q: "Which is a safe email habit?",
    options: [
      "Using the 'From' name as proof of identity",
      "Treating urgent payment requests as normal",
      "Checking the full sender address and verifying requests for money or credentials",
      "Disabling spam filters"
    ],
    answer: 2,
    explain: "Verify identity via trusted channels, especially for money, credentials, or sensitive data."
  },
  {
    category: "Phishing",
    q: "An email says: 'Your package is held. Pay a small fee now.' You didn’t order anything. Best action?",
    options: [
      "Pay quickly to avoid losing the package",
      "Click to see details",
      "Delete/report as phishing",
      "Reply asking for more information"
    ],
    answer: 2,
    explain: "Unexpected delivery/payment messages are common scams. Don’t engage; report/delete."
  },
  {
    category: "Browsers",
    q: "What does HTTPS (padlock) guarantee?",
    options: [
      "The website is always legitimate",
      "The connection is encrypted, not that the site is trustworthy",
      "No one can track you",
      "The site cannot be a phishing site"
    ],
    answer: 1,
    explain: "HTTPS only means encryption in transit. Phishing sites can also use HTTPS."
  },
  {
    category: "Updates",
    q: "Why should you install updates/patches promptly?",
    options: [
      "They make your computer faster every time",
      "They remove all ads",
      "They fix security vulnerabilities attackers exploit",
      "They are optional and rarely matter"
    ],
    answer: 2,
    explain: "Many attacks target known vulnerabilities. Patching reduces your exposure."
  },
  {
    category: "Public Wi-Fi",
    q: "What is safest on public Wi-Fi?",
    options: [
      "Logging into banking without protection",
      "Using a VPN (if available) and avoiding sensitive logins when possible",
      "Turning off device firewall",
      "Sharing files with nearby devices"
    ],
    answer: 1,
    explain: "Public networks increase risk. Use a VPN if you have one and avoid sensitive tasks."
  },
  {
    category: "USB & Devices",
    q: "You find a USB drive in the parking lot labeled 'Payroll'. What should you do?",
    options: [
      "Plug it in to identify the owner",
      "Give it to IT/security without plugging it in",
      "Take it home and check it",
      "Format it then open it"
    ],
    answer: 1,
    explain: "Unknown USB drives can be a malware delivery method. Never plug them in."
  },
  {
    category: "Data Handling",
    q: "What is the best way to send sensitive info?",
    options: [
      "Send via plain email",
      "Send via encrypted/approved secure channel (company tools)",
      "Post it in a shared chat room",
      "Put it in a public document link"
    ],
    answer: 1,
    explain: "Sensitive data should use approved, encrypted channels with access controls."
  },
  {
    category: "Phishing Red Flags",
    q: "Which combo is most suspicious?",
    options: [
      "Generic greeting + urgent tone + link to sign in",
      "Clear contact info + no link + request to reply later",
      "Normal signature + internal ticket number",
      "A scheduled meeting invite from your team"
    ],
    answer: 0,
    explain: "Generic greeting, urgency, and sign-in links are classic phishing signals."
  },
  {
    category: "Ransomware",
    q: "A key protection against ransomware is:",
    options: [
      "Never backing up",
      "Keeping offline/immutable backups and testing restores",
      "Sharing admin accounts",
      "Disabling antivirus"
    ],
    answer: 1,
    explain: "Good backups (and tested restores) reduce damage if ransomware hits."
  },
  {
    category: "Least Privilege",
    q: "Least privilege means:",
    options: [
      "Everyone should be admin to avoid delays",
      "Users get only the access they need to do their job",
      "Passwords are shared across teams",
      "2FA is optional"
    ],
    answer: 1,
    explain: "Limiting access reduces blast radius if an account is compromised."
  },
  {
    category: "Impersonation",
    q: "CEO fraud (BEC) usually involves:",
    options: [
      "A fake urgent request to transfer money or gift cards",
      "A software update prompt",
      "A browser pop-up ad",
      "A stolen laptop"
    ],
    answer: 0,
    explain: "Business Email Compromise often impersonates leaders to push urgent payments."
  },
  {
    category: "Verification",
    q: "You get an email asking to change payroll bank details. Best response?",
    options: [
      "Do it immediately",
      "Verify using a known phone number or internal process before making changes",
      "Ask them to resend with more urgency",
      "Forward to external email for review"
    ],
    answer: 1,
    explain: "High-risk changes should be verified out-of-band with known contact details."
  },
  {
    category: "Safe Browsing",
    q: "Which is safest behavior?",
    options: [
      "Downloading cracked software",
      "Clicking random 'update your player' pop-ups",
      "Using official app stores and vendor websites",
      "Disabling browser security warnings"
    ],
    answer: 2,
    explain: "Use trusted sources for downloads to reduce malware risk."
  },
  {
    category: "Account Security",
    q: "If your password is leaked in a breach, what should you do FIRST?",
    options: [
      "Reuse it on other sites to remember it",
      "Change it on the affected service and anywhere else you reused it",
      "Do nothing if you have a strong password",
      "Post about it on social media"
    ],
    answer: 1,
    explain: "Password reuse is a major risk. Change it everywhere it was used."
  },
  {
    category: "Phishing Websites",
    q: "A login page looks identical to the real one. What’s the best way to confirm it’s legitimate?",
    options: [
      "Check if the logo is correct",
      "Check the URL domain carefully and access the site via bookmarks/manual typing",
      "Trust it if it loads quickly",
      "Enter fake credentials once"
    ],
    answer: 1,
    explain: "Attackers clone pages. The domain and how you navigated there are key."
  },
  {
    category: "Reporting",
    q: "Why is reporting suspicious emails important?",
    options: [
      "It helps security warn others and block similar attacks",
      "It deletes the email automatically from everyone",
      "It guarantees you won’t get spam again",
      "It is only useful for managers"
    ],
    answer: 0,
    explain: "Reporting helps organizations detect campaigns and protect others quickly."
  },
  {
    category: "Final Check",
    q: "Which statement is most correct?",
    options: [
      "Phishing only targets older people",
      "Attackers often rely on human mistakes more than technical hacks",
      "If you have antivirus, you can click anything",
      "Only IT staff need cybersecurity awareness"
    ],
    answer: 1,
    explain: "Social engineering is powerful because it targets trust, urgency, and routine behavior."
  },
];

let idx = 0;
const answers = new Array(quiz.length).fill(null);

const elQ = document.getElementById("questionText");
const elOpts = document.getElementById("options");
const elExplain = document.getElementById("explainBox");
const elProgress = document.getElementById("progressPill");
const elCategory = document.getElementById("categoryPill");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreNote = document.getElementById("scoreNote");

function render(){
  const item = quiz[idx];
  elQ.textContent = item.q;
  elProgress.textContent = `Question ${idx+1} / ${quiz.length}`;
  elCategory.textContent = `Category: ${item.category}`;

  elOpts.innerHTML = "";
  elExplain.style.display = "none";
  elExplain.textContent = "";

  item.options.forEach((txt, i) => {
    const wrap = document.createElement("label");
    wrap.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "opt";
    input.value = i;
    input.checked = answers[idx] === i;

    input.addEventListener("change", () => {
      answers[idx] = i;
      showExplanation();
      updateButtons();
    });

    const span = document.createElement("div");
    span.textContent = txt;

    wrap.appendChild(input);
    wrap.appendChild(span);
    elOpts.appendChild(wrap);
  });

  updateButtons();
}

function showExplanation(){
  const item = quiz[idx];
  if (answers[idx] === null) return;

  const isCorrect = answers[idx] === item.answer;
  elExplain.style.display = "block";
  elExplain.textContent = (isCorrect ? "✅ Correct. " : "❌ Not quite. ") + item.explain;
}

function updateButtons(){
  prevBtn.disabled = idx === 0;

  const last = idx === quiz.length - 1;
  nextBtn.style.display = last ? "none" : "inline-flex";
  finishBtn.style.display = last ? "inline-flex" : "none";

  scoreNote.style.display = "none";
  restartBtn.style.display = "none";
}

prevBtn.addEventListener("click", () => {
  idx = Math.max(0, idx - 1);
  render();
  showExplanation();
});

nextBtn.addEventListener("click", () => {
  if (answers[idx] === null){
    alert("Please select an answer before moving on.");
    return;
  }
  idx = Math.min(quiz.length - 1, idx + 1);
  render();
  showExplanation();
});

finishBtn.addEventListener("click", () => {
  if (answers[idx] === null){
    alert("Please select an answer before finishing.");
    return;
  }

  // Score
  let score = 0;
  for (let i=0;i<quiz.length;i++){
    if (answers[i] === quiz[i].answer) score++;
  }
  const pct = Math.round((score / quiz.length) * 100);

  scoreNote.style.display = "block";
  scoreNote.textContent = `Your score: ${score}/${quiz.length} (${pct}%). Want to improve? Review explanations, then try again.`;

  restartBtn.style.display = "inline-flex";
  restartBtn.onclick = () => {
    for (let i=0;i<answers.length;i++) answers[i] = null;
    idx = 0;
    render();
  };

  showExplanation();
});

render();
