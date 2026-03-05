/*
  # Create leads table for PolpoAI contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `nome` (text) - contact name
      - `email` (text) - contact email
      - `messaggio` (text) - contact message
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `leads` table
    - Allow anonymous inserts (public contact form)
    - No public read access (only service role)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  messaggio text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
