// Counters Ratio (Core)
// It can be updated in the future to support custom intervals and not only.
study("Counters Ratio", overlay=false)
alertLim = 3.25 // input
cntr_rad = 1.0
rad_fctr = 1.0
ob_limit = +alertLim
os_limit = -alertLim
totalVol = vbuy+vsell
deltaVol = vbuy-vsell
cntrs = deltaVol*5/totalVol // counters
cntr_col = cntrs<0 ? lighten(red,50) : lighten(green,50)
//plot(counters, color=cntr_col, title="Counters Ratio")

rlv0 = 0.4<=cntrs and cntrs<1.0 or -0.4>=cntrs and cntrs>-1.0
rlv1 = 1.0<=cntrs and cntrs<1.5 or -1.0>=cntrs and cntrs>-1.5
rlv2 = 1.5<=cntrs and cntrs<2.0 or -1.5>=cntrs and cntrs>-2.0
rlv3 = 2.0<=cntrs and cntrs<2.5 or -2.0>=cntrs and cntrs>-2.5
rlv4 = 2.5<=cntrs and cntrs<3.0 or -2.5>=cntrs and cntrs>-3.0
rlv5 = 3.0<=cntrs and cntrs<3.5 or -3.0>=cntrs and cntrs>-3.5
rlv6 = 3.5<=cntrs and cntrs<4.0 or -3.5>=cntrs and cntrs>-4.0
rlv7 = 4.0<=cntrs and cntrs<4.5 or -4.0>=cntrs and cntrs>-4.5
rlv8 = 5.0<=cntrs and cntrs<5.0 or -5.0>=cntrs and cntrs>-5.0

if (rlv0) cntr_rad=1.0*rad_fctr
if (rlv1) cntr_rad=1.5*rad_fctr
if (rlv2) cntr_rad=2.0*rad_fctr
if (rlv3) cntr_rad=2.5*rad_fctr
if (rlv4) cntr_rad=3.0*rad_fctr
if (rlv5) cntr_rad=3.5*rad_fctr
if (rlv6) cntr_rad=4.0*rad_fctr
if (rlv7) cntr_rad=4.5*rad_fctr
if (rlv8) cntr_rad=5.0*rad_fctr
       
plot(ob_limit, color=darken(red,150))
plot(os_limit, color=darken(green,50))
plotcircle(cntrs, cntr_rad, color=cntr_col, title="Counters Ratio")
