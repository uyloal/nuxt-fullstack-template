import { timestamp, varchar } from "drizzle-orm/mysql-core"
import { customAlphabet } from 'nanoid'

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
const nanoid = (length: number) => customAlphabet(alphabet, length)()

export const timestamps = {
  created_at: timestamp().$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
  updated_at: timestamp().$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
}

export const id = (key: string, length: number = 36) => varchar(key, { length }).$defaultFn(() => nanoid(length))