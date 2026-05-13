# Minerva HC Handbook — Computer Science
> Cornerstone Course: Formal Analyses

---

### #algorithms

**Categorization:** Foundational Concept | Formal Analyses | Thinking Creatively | Solving Problems

**Paragraph Description:**
The steps of a proper algorithm are well-ordered, clear, unambiguous, and effective—they always produce a correct result when applied to valid inputs. Algorithms provide systematic procedures for solving problems or accomplishing tasks. Understanding algorithms involves specifying inputs and outputs, identifying stopping conditions, analyzing efficiency, and verifying correctness.

**General Example:**
A residence hall administrator needs to assign students to rooms. They design an algorithm that takes as input a list of students with their preferences and constraints (e.g., desired roommate, accessibility needs), processes students in priority order, checks each candidate room against all constraints, assigns the first valid match, and continues until all students are assigned or no valid assignment exists. The algorithm guarantees a consistent and fair process, unlike ad hoc decision-making.

---

---

### #optimization

**Categorization:** Foundational Concept | Formal Analyses | Thinking Creatively | Solving Problems

**Paragraph Description:**
Optimization involves determining the relevant local or global extrema (maximum or minimum values) within a set of solutions, subject to constraints. Optimization problems require specifying an objective function (what to optimize), decision variables (what can be changed), and constraints (boundaries on the solution space). Techniques include calculus-based methods, linear programming, and heuristic approaches like genetic algorithms.

**General Example:**
A college student wants to minimize grocery costs while meeting nutritional requirements. They specify an objective function (minimize total cost), decision variables (quantities of each food item), and constraints (minimum daily calories, protein, vitamins; maximum budget). Using a genetic algorithm, they find the optimal food combination—a solution that satisfies all nutritional constraints at minimal cost.

---

---

### #confidenceintervals

**Categorization:** Habit of Mind | Formal Analyses | Thinking Critically | Analyzing Problems

**Paragraph Description:**
A confidence interval specifies upper and lower values that are likely to bracket an unknown population value with a specified level of confidence (commonly 95%). Confidence intervals communicate both the estimated value and the uncertainty around that estimate. Overlapping confidence intervals suggest that apparent differences may not be statistically meaningful; non-overlapping intervals suggest the difference is likely real.

**General Example:**
Mark is trying to decide whether to bet on an election outcome based on approval ratings. Candidate A has 51% approval with a 95% CI of [48%, 54%]; Candidate B has 49% with a CI of [46%, 52%]. Mark recognizes that the overlapping confidence intervals mean the apparent difference is not statistically significant—he cannot conclude that Candidate A is genuinely ahead, and decides not to bet.

---

---

### #correlation

**Categorization:** Habit of Mind | Formal Analyses | Thinking Critically | Analyzing Data

**Paragraph Description:**
Correlation is a statistical relationship that describes the degree to which two variables are associated. The correlation coefficient (r) ranges from -1 (perfect negative correlation) to +1 (perfect positive correlation), with 0 indicating no linear relationship. Correlation does not imply causation—a third variable may cause both, or the relationship may be coincidental. Scatter plots are the primary visual tool for exploring correlations.

**General Example:**
A business analyst at a multilateral development bank examines whether project duration is correlated with media coverage (measured by number of articles). They create a scatter plot and calculate r = 0.65, indicating a moderate positive correlation. However, they caution against assuming causation: longer projects may involve more phases that attract coverage, but media attention may also extend projects by creating accountability and scrutiny.

---

---

### #descriptivestats

**Categorization:** Habit of Mind | Formal Analyses | Thinking Critically | Analyzing Data

**Paragraph Description:**
Descriptive statistics include measures of location—mean (arithmetic average), median (middle value), and mode (most frequent value)—and measures of spread—standard deviation (average deviation from mean) and range (maximum minus minimum). Understanding which measure is most appropriate depends on the data's distribution. In skewed distributions, the median is more representative than the mean; standard deviation quantifies variability and risk.

**General Example:**
A student choosing between careers as a physician and as a ship's first mate examines salary data. Physicians have a high mean salary but a low median—because a small number of specialists earn extremely high salaries, skewing the mean upward. First mates have a higher median salary than the physician median, and much lower variance. For someone who wants predictable earnings rather than a chance at extreme wealth, the descriptive statistics favor the maritime career.

---

---

### #distributions

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Analyzing Data

**Paragraph Description:**
The distribution of a variable is a function that maps all possible values to how often they occur. Key distributions include the normal (bell-curve) distribution, the binomial distribution, and the Poisson distribution. The Central Limit Theorem states that the sampling distribution of the mean approaches normality as sample size increases, regardless of the population distribution—a foundational result enabling statistical inference.

**General Example:**
An engineer must determine the probability that an elevator will exceed its 700kg weight limit when carrying 9 people. Individual passenger weights are not normally distributed, but by the Central Limit Theorem, the sum of 9 weights will be approximately normally distributed. The engineer calculates the mean and standard deviation of the sum distribution and determines the probability that it exceeds 700kg—informing whether the elevator's capacity rating is appropriate.

---

---

### #probability

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Analyzing Data

**Paragraph Description:**
Probability specifies how likely it is that a specific event will occur. Different interpretations include frequentist (probability as long-run frequency) and Bayesian (probability as degree of belief, updated by evidence). Bayes' theorem provides the formal method for updating probabilities in light of new evidence: P(A|B) = P(B|A) x P(A) / P(B). Understanding base rates is crucial for avoiding common probability errors.

**General Example:**
During an annual physical, a patient tests positive for meningitis. The test has 95% sensitivity and 95% specificity. The doctor applies Bayes' theorem: given the very low base rate of meningitis in the general population (1 in 100,000), and despite the positive test, the patient's actual probability of having meningitis is less than 1%. The doctor orders a confirmatory test rather than immediately treating—demonstrating the importance of base rates in probability reasoning.

---

---

### #regression

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Analyzing Data

**Paragraph Description:**
A regression function represents a model for the relationship between a dependent variable and one or more independent variables. Simple linear regression estimates the best-fit line through a scatter plot. Multiple regression includes multiple predictors. R-squared indicates the proportion of variance in the dependent variable explained by the model. Residual analysis checks whether model assumptions are met.

**General Example:**
A public health consultant wants to predict BMI from lifestyle variables. A simple regression using only exercise minutes explains 40% of variance (R²=0.40). Adding dietary variables—daily carbohydrate, protein, and fiber intake—to a multiple regression model improves explanatory power dramatically (R²=0.89), indicating that diet and exercise together are much more informative than exercise alone.

---

---

### #significance

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Analyzing Data

**Paragraph Description:**
Tests of statistical significance tell us when a pattern in a sample is likely due to chance versus a genuine effect in the population. A p-value below a threshold (commonly 0.05) indicates statistical significance. However, statistical significance must be distinguished from practical significance—a very large sample can make even trivially small effects statistically significant. Effect sizes (such as Cohen's d) quantify practical significance.

**General Example:**
A clinical trial of a new headache treatment finds a statistically significant reduction in pain duration (p=0.03). However, the actual reduction is only 15 minutes on average, and Cohen's d=0.1 indicates a very small effect size. The treatment is statistically significant (unlikely to be due to chance) but practically insignificant (the reduction is too small to matter to patients or justify the cost of the medication).

---

---

### #decisiontrees

**Categorization:** Habit of Mind | Formal Analyses | Thinking Critically | Analyzing Decisions

**Paragraph Description:**
A decision tree replaces a large, complex decision with a series of smaller decisions made in sequence. Decision nodes represent choices; chance nodes represent uncertain outcomes with associated probabilities. Expected value is calculated by multiplying outcomes by their probabilities. Decision trees make explicit the structure of sequential decisions and can be "folded back" to determine the optimal strategy.

**General Example:**
A person deciding between a beach or mountains weekend trip considers purchasing a $10 weather app. They construct two decision trees—one with the app, one without—calculating expected enjoyment values based on weather probabilities. The app predicts beach weather, they go to the beach, but the weather turns horrible. Post-hoc analysis reveals whether the app's value (given its prediction accuracy) justified the cost.

---

---

### #utility

**Categorization:** Foundation Concept | Formal Analyses | Thinking Critically | Analyzing Decisions

**Paragraph Description:**
A utility function serves as a mathematical model describing preferences by mapping outcome values to satisfaction (utility). Utility theory underpins rational decision-making under uncertainty. Common deviations from purely rational utility maximization include loss aversion (losses hurt more than equivalent gains feel good), risk aversion (preferring certain outcomes to risky ones with equal expected value), and probability distortion (overweighting small probabilities).

**General Example:**
A friend buys an extended warranty on a $200 pair of headphones, even though the warranty is statistically a bad deal. Utility theory explains the decision: loss aversion means the potential loss of $200 feels worse than the expected value calculation suggests; risk aversion makes the certain (if small) cost of the warranty preferable to the uncertain (if unlikely) loss of $200; and probability distortion leads the friend to overestimate the likelihood of headphone failure.

---

---

### #gametheory

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Analyzing Problems

**Paragraph Description:**
Game theory provides a framework to study decision-making behavior among multiple interacting intelligent agents. Key elements include: players (the decision-makers), strategies (possible actions), payoffs (outcomes resulting from strategy combinations), and equilibria (stable states where no player can improve their outcome by unilaterally changing strategy). The Nash equilibrium is the most important solution concept.

**General Example:**
Two pizza restaurants are deciding whether to share their secret recipes. In a single-round game, this resembles a Prisoner's Dilemma: both restaurants have a dominant strategy to share false/incorrect recipes, resulting in both receiving worse outcomes than if they had cooperated (Nash equilibrium = mutual defection). In a repeated game, however, the threat of future retaliation makes cooperation rational, and both restaurants share genuine recipes, enjoying mutual benefit.

---

---

### #variables

**Categorization:** Habit of Mind | Formal Analyses | Thinking Critically | Analyzing Problems

**Paragraph Description:**
Identifying and classifying relevant variables, examining relationships between them, and considering how they can be measured and manipulated is fundamental to empirical and formal analysis. Key variable types include: independent (manipulated/predictor), dependent (measured/outcome), confounding (related to both independent and dependent variables, potentially causing spurious correlations), and mediating/moderating variables.

**General Example:**
A researcher studying tipping behavior in a restaurant identifies server friendliness as the independent variable (the presumed cause) and tip percentage as the dependent variable (the measured outcome). They also identify potential confounders: table size (larger parties may tip differently), time of day (dinner vs. lunch patrons have different demographics), and whether alcohol was ordered. By identifying and controlling for these confounders, they can better isolate the effect of friendliness on tipping.

---

---

### #deduction

**Categorization:** Foundational Concept | Thinking Critically to Evaluate Justifications

**Paragraph Description:**
Deductive reasoning uses a set of propositions as premises to reach a conclusion that follows necessarily from those premises. A deductive argument is valid if the conclusion must be true given the premises are true, and sound if valid AND all premises are actually true. Common deductive argument forms include modus ponens, modus tollens, and disjunctive syllogism.

**General Example:**
A person needs to know if the bank is open Saturday. They know: either the bank or the café is open on Saturday (but not both); the café is open on Saturday; therefore (by disjunctive syllogism), the bank is not open on Saturday. This valid deductive argument guarantees the conclusion given the truth of the premises—it does not merely make the conclusion probable.

---

---

### #fallacies

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Evaluating Claims

**Paragraph Description:**
Formal fallacies result from errors in argument structure (the conclusion does not follow even if the premises are true). Informal fallacies result from issues with the content of propositions (premises that are misleading, irrelevant, or ambiguous). Common informal fallacies include: straw man (misrepresenting an opponent's argument), ad hominem (attacking the person rather than the argument), appeal to authority, and false dichotomy.

**General Example:**
During a presidential debate, a candidate proposes a universal healthcare plan. The opponent responds by calling it "socialism" and attacking socialist economic systems—rather than engaging with the actual proposal. This is a straw man fallacy: by replacing the candidate's nuanced healthcare proposal with a caricatured position, the opponent avoids engaging with the real argument. Identifying this fallacy helps evaluate the quality of the debate.

---

---

### #induction

**Categorization:** Foundational Concept | Thinking Critically to Evaluate Justifications

**Paragraph Description:**
Induction involves reasoning from specific instances, observations, or experiences to a conclusion that is likely to be true. Unlike deduction, inductive conclusions are not guaranteed by the premises—they are made probable. The strength of an inductive argument depends on the number and representativeness of the instances, and on the absence of known counterexamples. Induction underlies scientific reasoning and empirical generalization.

**General Example:**
A friend named Kate claims that all Kpop fans love bubble tea, based on having met two Kpop fans who love bubble tea. This inductive argument is very weak—the sample size is tiny and almost certainly not representative. To strengthen the argument, Kate would need data from many Kpop fans, sampled in a way that avoids selection bias, before making such a broad generalization.

---

---

### #estimation

**Categorization:** Foundational Concept | Formal Analyses | Thinking Critically | Evaluating Claims

**Paragraph Description:**
Estimation involves making reasonable approximations of quantities that are difficult or impossible to measure directly. Common techniques include: powers of 10 (for order-of-magnitude estimates), round numbers (simplifying calculations while preserving accuracy), and establishing limits (minimum and maximum values that bracket the true answer). Fermi estimation—breaking complex questions into tractable sub-questions—is a key skill.

**General Example:**
To estimate the number of hotels in Los Angeles, a student applies Fermi estimation: LA has about 4 million residents; roughly 5-10% are tourists/visitors at any time (200,000-400,000 people); hotels average 20-1,000 rooms (estimate 150 rooms); with an occupancy rate of roughly 70%, each hotel serves about 100-150 guests. Calculation: 300,000 guests / 125 guests per hotel = approximately 2,400 hotels. Adjusting for the wide range of assumptions yields an estimate of approximately 1,050 hotels. The actual number is 1,008.

---

## Empirical Analyses

---

---

