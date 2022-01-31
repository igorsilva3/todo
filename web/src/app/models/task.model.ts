export class Task {
  id: number
  title: string
  description: string
  status: 'open' | 'done'
  createdAt: Date
  updatedAt: Date
}
