# Quick Setup Script for Supabase Edge Function
# This script will deploy your Edge Function to fix the "failed to fetch" error

Write-Host "=== SION Education - Supabase Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if Supabase CLI is installed
Write-Host "Checking for Supabase CLI..." -ForegroundColor Yellow
$supabaseInstalled = Get-Command supabase -ErrorAction SilentlyContinue

if (-not $supabaseInstalled) {
    Write-Host "Supabase CLI not found. Installing..." -ForegroundColor Red
    npm install -g supabase
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install Supabase CLI. Please install manually:" -ForegroundColor Red
        Write-Host "  npm install -g supabase" -ForegroundColor White
        exit 1
    }
    Write-Host "✓ Supabase CLI installed!" -ForegroundColor Green
} else {
    Write-Host "✓ Supabase CLI is installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Step 1: Login to Supabase ===" -ForegroundColor Cyan
Write-Host "This will open a browser window for authentication..." -ForegroundColor Yellow
supabase login

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to login. Please try manually:" -ForegroundColor Red
    Write-Host "  supabase login" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "=== Step 2: Link Project ===" -ForegroundColor Cyan
supabase link --project-ref wtuflbxrpmisnfkpnhtp

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to link project. Please check your credentials." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Step 3: Apply Database Migrations ===" -ForegroundColor Cyan
Write-Host "Creating database tables..." -ForegroundColor Yellow
supabase db push

if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Database push failed. You may need to run the SQL manually." -ForegroundColor Yellow
    Write-Host "Go to Supabase Dashboard -> SQL Editor and run:" -ForegroundColor Yellow
    Write-Host "  supabase/migrations/001_initial_schema.sql" -ForegroundColor White
}

Write-Host ""
Write-Host "=== Step 4: Deploy Edge Function ===" -ForegroundColor Cyan
Write-Host "Deploying make-server-5c52ac3e function..." -ForegroundColor Yellow
supabase functions deploy make-server-5c52ac3e

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to deploy function." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Step 5: Test Deployment ===" -ForegroundColor Cyan
Write-Host "Testing health endpoint..." -ForegroundColor Yellow
$response = Invoke-WebRequest -Uri "https://wtuflbxrpmisnfkpnhtp.supabase.co/functions/v1/make-server-5c52ac3e/health" -UseBasicParsing -ErrorAction SilentlyContinue

if ($response.StatusCode -eq 200) {
    Write-Host "✓ Edge Function is working!" -ForegroundColor Green
    Write-Host $response.Content -ForegroundColor White
} else {
    Write-Host "Warning: Could not verify function deployment." -ForegroundColor Yellow
    Write-Host "Please test manually by visiting:" -ForegroundColor Yellow
    Write-Host "  https://wtuflbxrpmisnfkpnhtp.supabase.co/functions/v1/make-server-5c52ac3e/health" -ForegroundColor White
}

Write-Host ""
Write-Host "=== Setup Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Your Edge Function is now deployed!" -ForegroundColor Green
Write-Host "Try registering a student again - it should work now." -ForegroundColor Green
Write-Host ""
Write-Host "To view logs:" -ForegroundColor Yellow
Write-Host "  supabase functions logs make-server-5c52ac3e" -ForegroundColor White
Write-Host ""
