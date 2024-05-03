import { z } from 'zod'

export const projectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('upadate'),
    z.literal('delete'),
  ]),
  z.literal('Project'),
])

export type ProjectSubject = z.infer<typeof projectSubject>
