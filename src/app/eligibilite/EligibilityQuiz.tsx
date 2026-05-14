"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface Option {
  label: string;
  score: number;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "Votre prêt immobilier est-il libellé en francs suisses ou indexé sur le CHF ?",
    options: [
      { label: "Oui", score: 3 },
      { label: "Non", score: 0 },
      { label: "Je ne sais pas", score: 1 },
    ],
  },
  {
    id: "q2",
    text: "Le bien financé par ce prêt est-il situé en France ?",
    options: [
      { label: "Oui", score: 3 },
      { label: "Non", score: 0 },
      { label: "Je ne sais pas", score: 1 },
    ],
  },
  {
    id: "q3",
    text: "Avant la signature, avez-vous reçu des explications chiffrées et compréhensibles sur le risque de change ?",
    options: [
      { label: "Oui, clairement", score: 0 },
      { label: "Non", score: 3 },
      { label: "Je ne sais pas", score: 2 },
    ],
  },
];

type Level = "high" | "mid" | "low";

const RESULT_DATA: Record<
  Level,
  {
    badge: string;
    badgeClass: string;
    cardClass: string;
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string | null;
    secondaryLabel: string;
    secondaryHref: string;
  }
> = {
  high: {
    badge: "Potentiel élevé",
    badgeClass: "elig-result-level-high",
    cardClass: "elig-result-high",
    title: "Oui, votre dossier mérite une première analyse",
    text: "Vos réponses indiquent plusieurs critères importants : un prêt potentiellement lié au franc suisse, un bien situé en France ou une information bancaire à vérifier. Une analyse du contrat et des documents remis permettrait de confirmer les pistes envisageables.",
    primaryLabel: "Faire une simulation indicative",
    primaryHref: "/simulation",
    secondaryLabel: "Comprendre la jurisprudence prêt CHF",
    secondaryHref: "/jurisprudence",
  },
  mid: {
    badge: "À approfondir",
    badgeClass: "elig-result-level-mid",
    cardClass: "elig-result-mid",
    title: "Votre situation est à vérifier",
    text: "Certaines réponses peuvent justifier une première vérification, mais les éléments saisis ne suffisent pas à conclure. L'analyse de l'offre de prêt, des notices et des éventuelles simulations remises par la banque reste déterminante.",
    primaryLabel: "Faire une simulation indicative",
    primaryHref: "/simulation",
    secondaryLabel: "Comprendre la jurisprudence prêt CHF",
    secondaryHref: "/jurisprudence",
  },
  low: {
    badge: "Potentiel limité",
    badgeClass: "elig-result-level-low",
    cardClass: "elig-result-low",
    title: "A priori, vous semblez peu concerné",
    text: "D'après vos réponses, peu d'éléments indiquent à ce stade une exposition caractéristique à un prêt CHF contestable. Ce résultat reste indicatif, notamment si vous n'êtes pas certain de la devise du prêt ou des documents reçus.",
    primaryLabel: "Recommencer le test",
    primaryHref: null,
    secondaryLabel: "Comprendre la jurisprudence prêt CHF",
    secondaryHref: "/jurisprudence",
  },
};

function getLevel(score: number): Level {
  if (score >= 6) return "high";
  if (score >= 3) return "mid";
  return "low";
}

export default function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const resultRef = useRef<HTMLDivElement>(null);

  const showResult = step === QUESTIONS.length;
  const totalScore = QUESTIONS.reduce((acc, q, i) => {
    const idx = answers[i];
    return idx !== undefined ? acc + q.options[idx].score : acc;
  }, 0);
  const level = getLevel(totalScore);
  const resultData = RESULT_DATA[level];

  function selectOption(optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [step]: optionIndex }));
  }

  function handleNext() {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStep(QUESTIONS.length);
      setTimeout(
        () =>
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        50
      );
    }
  }

  function handlePrev() {
    if (step > 0) setStep(step - 1);
  }

  function handleReset() {
    setStep(0);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (showResult) {
    return (
      <div ref={resultRef}>
        <div className={`elig-result-card ${resultData.cardClass}`}>
          <span className={`elig-result-level ${resultData.badgeClass}`}>
            {resultData.badge}
          </span>
          <h2>{resultData.title}</h2>
          <p>{resultData.text}</p>
          <div className="elig-result-ctas">
            {resultData.primaryHref ? (
              <Link href={resultData.primaryHref} className="primary-btn">
                {resultData.primaryLabel}
              </Link>
            ) : (
              <button type="button" className="primary-btn" onClick={handleReset}>
                {resultData.primaryLabel}
              </button>
            )}
            <Link href={resultData.secondaryHref} className="secondary-btn">
              {resultData.secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="elig-prudence-box">
          <p className="elig-prudence-label">Résultat indicatif</p>
          <p className="elig-prudence-text">
            Ce test est indicatif. Il ne constitue pas un avis juridique et ne
            permet pas de conclure seul à l&apos;existence d&apos;un recours. L&apos;analyse
            dépend toujours de la rédaction du contrat, des documents remis par
            la banque et de votre situation personnelle.
          </p>
        </div>

        <div className="elig-quiz-actions" style={{ marginTop: "24px" }}>
          <button
            type="button"
            className="secondary-btn"
            onClick={handleReset}
            aria-label="Réinitialiser le questionnaire"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    );
  }

  const currentQ = QUESTIONS[step];
  const currentAnswer = answers[step];
  const hasAnswer = currentAnswer !== undefined;
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / QUESTIONS.length) * 100);

  return (
    <>
      {/* Progress */}
      <div className="elig-progress-wrap">
        <div className="elig-progress-labels">
          <span className="elig-progress-label">
            Question {step + 1} sur {QUESTIONS.length}
          </span>
          <span className="elig-progress-label">{progress}%</span>
        </div>
        <div className="elig-progress-bar-bg">
          <div
            className="elig-progress-bar-fill"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progression du questionnaire"
          />
        </div>
      </div>

      {/* Question */}
      <div className="elig-quiz-content">
        <div className="elig-block">
          <div className="elig-questions-list">
            <div className="elig-question">
              <p className="elig-question-text">{currentQ.text}</p>
              <div className="elig-options" role="group" aria-label={currentQ.text}>
                {currentQ.options.map((opt, idx) => {
                  const isSelected = currentAnswer === idx;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      className={`elig-option-btn${isSelected ? " elig-selected" : ""}`}
                      onClick={() => selectOption(idx)}
                      aria-pressed={isSelected}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="elig-quiz-actions">
        {step > 0 && (
          <button type="button" className="secondary-btn" onClick={handlePrev}>
            ← Précédent
          </button>
        )}
        <button
          type="button"
          className="primary-btn"
          onClick={handleNext}
          disabled={!hasAnswer}
          style={!hasAnswer ? { opacity: 0.42, cursor: "not-allowed" } : {}}
          aria-label={
            step === QUESTIONS.length - 1
              ? "Afficher mon résultat"
              : "Question suivante"
          }
        >
          {step === QUESTIONS.length - 1 ? "Voir mon résultat" : "Suivant →"}
        </button>
      </div>
    </>
  );
}
