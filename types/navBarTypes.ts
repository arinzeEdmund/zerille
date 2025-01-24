export type NavBarProps = {
    iconName: undefined | "arrow-back-ios",
    righticonName?: undefined | "arrow-back-ios" | "support-agent" | "check-circle-outline",
    backgroundColor: any,
    onPress: () => void,
    action: () => void,
    nextPage: string,
    displayBackIcon?: undefined | "flex" | "none",
    displayTitle?: undefined | "flex" | "none",
    displayRightIcon?: undefined | "flex" | "none" ,
    rightIcon?: undefined | "flex" | "none",
    justifyContent?: "space-between" | 'center' | 'flex-end' | 'flex-start',
    displayNextPage?: undefined | "flex" | "none",
    iconSize?: number
  }