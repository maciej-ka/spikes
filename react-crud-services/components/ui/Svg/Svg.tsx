import SvgAutomation from "./SvgAutomation"
import SvgBackup from "./SvgBackup"
import SvgClubs from "./SvgClubs"
import SvgDiamonds from "./SvgDiamonds"
import SvgHearts from "./SvgHearts"
import SvgInvaders from "./SvgInvaders"
import SvgMonitoring from "./SvgMonitoring"
import SvgRecovery from "./SvgRecovery"
import SvgSpades from "./SvgSpades"

const svgMap = {
  automation: SvgAutomation,
  backup: SvgBackup,
  clubs: SvgClubs,
  diamonds: SvgDiamonds,
  hearts: SvgHearts,
  invaders: SvgInvaders,
  monitoring: SvgMonitoring,
  recovery: SvgRecovery,
  spades: SvgSpades,
}

export type SvgName = keyof typeof svgMap

type Props = {
  name: SvgName
  className?: string
}

const Svg = ({ name, ...props }: Props) => {
  const Component = svgMap[name]
  return <Component {...props} />
}

export default Svg
