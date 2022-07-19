-- DROP TABLE user_info;
-- DROP TABLE category;
-- DROP TABLE spending;

-- CREATE TABLE user_info(
--   "id" SERIAL,
--   "username" varchar NOT NULL,
--   "avatar_link" varchar NOT NULL,
--   "password" varchar NOT NULL,
--   CONSTRAINT "user_pk0" PRIMARY KEY ("id")
-- );

-- CREATE TABLE category(
--   "cat_id" SERIAL,
--   "cat_name" varchar NOT NULL,
--   CONSTRAINT "cat_pk0" PRIMARY KEY ("cat_id")
-- );

CREATE TABLE spending(
  "user_id" int NOT NULL,
  "amount" money NOT NULL,
  "category_id" int NOT NULL,
  "dates" date NOT NULL,
  CONSTRAINT "spending_fk0" FOREIGN KEY ("user_id") REFERENCES user_info("id"),
  CONSTRAINT "spending_fk1" FOREIGN KEY ("category_id") REFERENCES category("cat_id")
);

CREATE TABLE income(
  "user_id" int NOT NULL,
  "amount" money NOT NULL,
  "dates" date NOT NULL,
  CONSTRAINT "income_fk0" FOREIGN KEY ("user_id") REFERENCES user_info("id")
)