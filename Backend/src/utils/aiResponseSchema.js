function nativeGeminiSchema() {
    return {
        type: "OBJECT",
        properties: {
            title: {
                type: "STRING",
                description: "The job title based on the job description."
            },
            matchScore: {
                type: "NUMBER",
                description: "A realistic score from 0 to 100 calculating the candidate's fit."
            },
            technicalQuestions: {
                type: "ARRAY",
                description: "List of technical questions.",
                items: {
                    type: "OBJECT",
                    properties: {
                        question: { type: "STRING" },
                        intention: { type: "STRING" },
                        answer: { type: "STRING" }
                    },
                    required: ["question", "intention", "answer"]
                }
            },
            behavioralQuestions: {
                type: "ARRAY",
                description: "List of behavioral questions.",
                items: {
                    type: "OBJECT",
                    properties: {
                        question: { type: "STRING" },
                        intention: { type: "STRING" },
                        answer: { type: "STRING" }
                    },
                    required: ["question", "intention", "answer"]
                }
            },
            skillGaps: {
                type: "ARRAY",
                description: "Identified gaps between the candidate's profile and the job description.",
                items: {
                    type: "OBJECT",
                    properties: {
                        skill: { type: "STRING" },
                        severity: {
                            type: "STRING",
                            description: "Must be exactly one of: 'low', 'medium', 'high'"
                        }
                    },
                    required: ["skill", "severity"]
                }
            },
            preparationPlan: {
                type: "ARRAY",
                description: "A structured study schedule.",
                items: {
                    type: "OBJECT",
                    properties: {
                        day: { type: "NUMBER" },
                        focus: { type: "STRING" },
                        tasks: {
                            type: "ARRAY",
                            items: { type: "STRING" }
                        }
                    },
                    required: ["day", "focus", "tasks"]
                }
            }
        },
        // This forces the AI to include EVERY top-level key
        required: ["title", "matchScore", "technicalQuestions", "behavioralQuestions", "skillGaps", "preparationPlan"]
    };
}


module.exports = {nativeGeminiSchema};