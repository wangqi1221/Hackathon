
export type CustomValue = Partial<{
    clientId: string
    clientName: string
    customValue: number
    per: number
}>

export type Recommand = Partial<{
    clientId: string
    clientName: string
    recommandServices: ServiceInfo[]
}>

export type UserProfile = Partial<{
    clientId: string
    clientName: string
    netAssets: number
    establishedTime: string
    region: string
    numberOfFunds: number
}>

export type Tornado = Partial<{
    name: string
    value: number
}>

export type ServiceInfo = Partial<{
    name: string
    desc: string
}>