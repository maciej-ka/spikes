import styles from "./WizardStep.module.css"

const WizardStep = () => (
  <div className={styles.step}>
    <div className={styles.header}>
    </div>

    <div>
    </div>

    <div className={styles.footer}>
      <Button className={styles.next}>next</Button>
    </div>
  </div>
)

export default WizardStep
