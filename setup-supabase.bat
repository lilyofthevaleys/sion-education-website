@echo off
echo === SION Education - Quick Supabase Setup ===
echo.

echo Installing Supabase CLI (if needed)...
call npm install -g supabase
echo.

echo Step 1: Login to Supabase...
call supabase login
echo.

echo Step 2: Link project...
call supabase link --project-ref wtuflbxrpmisnfkpnhtp
echo.

echo Step 3: Apply database migrations...
call supabase db push
echo.

echo Step 4: Deploy Edge Function...
call supabase functions deploy make-server-5c52ac3e
echo.

echo Setup Complete!
echo Try registering a student again - it should work now.
echo.
pause
