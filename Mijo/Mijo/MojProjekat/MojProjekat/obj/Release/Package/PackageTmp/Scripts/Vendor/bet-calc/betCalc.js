var betCalc = function () {
    var winType = 1;
    var rangeTax = [];

   

    var calcWinTax = function (winning, stake, bonus) {
        winning = winning.plus(bonus);
        var temp = winning;
        for (var i = 0; i < rangeTax.length; i++) {
            if (rangeTax[i].type === 'win') {
                if (winning >= rangeTax[i].start && winning <= rangeTax[i].end) {
                    winning = winning.minus(winning.times(rangeTax[i].tax));
                    if (winType === 2) {
                        winning = winning.minus(stake);
                    }
                    return {
                        win: parseFloat(winning),
                        tax: rangeTax[i].tax * 100,
                        taxedWin: parseFloat(temp.minus(winning))
                    };
                }
            }
        }
        return {
            win: parseFloat(winning),
            tax: 0,
            taxedWin: parseFloat(temp.minus(winning))
        };
    }

    var calcStakeTax = function (stake) {
        for (var i = 0; i < rangeTax.length; i++) {
            if (rangeTax[i].type === 'stake') {
                if (stake >= rangeTax[i].start && stake <= rangeTax[i].end) {
                    var stakeTax = new Big(stake);
                    var taxedStake = new Big(stake);

                    taxedStake = parseFloat(taxedStake.times(rangeTax[i].tax).toString()).toFixed(2);
                    stakeTax = stakeTax.minus(taxedStake);

                    return {
                        valueForCalc: stakeTax,
                        tax: rangeTax[i].tax * 100 + '%',
                        taxedStake: taxedStake
                    };
                }
            }
        }
        return {
            valueForCalc: new Big(stake),
            tax: '0%',
            taxedStake: 0
        };
    }

    var checkStake = function (stake) {
        if (stake === undefined || stake === null || isNaN(stake) === true) {
            stake = 1;
            return stake;
        } else return stake;
    }

    var checkArray = function (array) {
        if (Array.isArray(array) === true) {
            if (array.length < 1) {
                return false;
            } else return true;
        } else return false;
    }

    var calculateBonus = function(winnng, bonusPercentage) {
        var bonus = new Big(winnng);
        bonus = bonus.times(bonusPercentage).div(100);
        return bonus;
    }

    var calcStandard = function (odds, stake, bonusPercentage) {
        var bonus = 0;
        if (checkArray(odds) === false) {
            return null;
        }

        stake = checkStake(stake);

        var stakeTax = calcStakeTax(stake);

        var winning = new Big(1);
        for (var i = 0; i < odds.length; i++) {
            winning = winning.times(odds[i]);
        }

        winning = winning.times(stakeTax.valueForCalc);

        if (bonusPercentage) {
            bonus = calculateBonus(winning, bonusPercentage);
        } else {
            bonusPercentage = 0;
        }

        var winningWithTax = calcWinTax(winning, stake, bonus);

        return {
            winning: parseFloat(winning.toString()),
            winTax: winningWithTax,
            stake: stake,
            stakeTax: stakeTax.tax,
            taxedStake: stakeTax.taxedStake,
            bonus: parseFloat(bonus.toString()),
            bonusPercentage: bonusPercentage
        };
    };

    var calcSystem = function (sysOdds, combinations, stake, fixOdds) {
        if (checkArray(sysOdds) === false || checkArray(combinations) === false) {
            return null;
        }

        stake = checkStake(stake);

        var systems = [];
        var combinedWin = 0;
        var stakeTax = calcStakeTax(stake);

        var totalCominations = getTotalCombinations(sysOdds.length, combinations);

        for (var h = 0; h < combinations.length; h++) {
            var cmb = [];
            var c = Combinatorics.bigCombination(sysOdds, combinations[h]);
            while (a = c.next()) {
                cmb.push(a);
            }
            var combLength = cmb.length;

            var totalFix = 1;
            var hasFix = true;
            if (checkArray(fixOdds) === true) {
                for (var i = 0; i < fixOdds.length; i++) {
                    totalFix *= fixOdds[i];
                }
            } else hasFix = false;
            
            var stakePerCombination = stakeTax.valueForCalc.div(totalCominations);
            stakePerCombination = parseFloat(stakePerCombination.toString()).toFixed(8);
            var winningsPerCombination = [];
            var totalWinning = 0;
            var min = Infinity;
            var max = 0;
            for (var i = 0; i < combLength; i++) {
                var coef = 1;
                var winning = 1;
                for (var j = 0; j < combinations[h]; j++) {
                    coef = coef * cmb[i][j];
                }
                winning = winning * coef * totalFix * stakePerCombination;
                winningsPerCombination.push(winning);
                totalWinning = totalWinning + winning;

                if (winningsPerCombination[i] < min) {
                    min = winningsPerCombination[i];
                }
                if (winningsPerCombination[i] > max) {
                    max = winningsPerCombination[i];
                }
            }
            if (hasFix == false) {
                totalFix = 0;
            }
            var winningWithTax = calcWinTax(new Big(totalWinning), stake, 0);
            var system = {
                totalWin: totalWinning,
                winTax: winningWithTax,
                winPerComb: winningsPerCombination,
                stakePerComb: stakePerCombination,
                minWin: min,
                maxWin: max,
                totalFix: totalFix,
                stake: stake,
                taxedStake: stakeTax.taxedStake,
                stakeTax: stakeTax.tax
            };
            systems.push(system);
            combinedWin = combinedWin + totalWinning;
        }
        var combinedWinTax = calcWinTax(new Big(combinedWin), stake, 0);
        return {
            systems: systems,
            combinedWin: combinedWin,
            combinedWinTax: combinedWinTax
        };
    };

    var calcSingle = function (odds, stake) {
        if (checkArray(odds) === false) {
            return null;
        }
        stake = checkStake(stake);
        var stakeTax = calcStakeTax(stake);
        var stakePerOdd = stakeTax.valueForCalc.div(odds.length);
        var winsPerOdd = [];
        var totalWin = new Big(0);
        for (var i = 0; i < odds.length; i++) {
            var winning = stakePerOdd.times(odds[i]);
            winsPerOdd.push(parseFloat(winning.toString()));
            totalWin = totalWin.plus(winning);
        }
        var winningWithTax = calcWinTax(totalWin, stake, 0);
        return {
            totalWin: parseFloat(totalWin.toString()),
            winTax: winningWithTax,
            stake: stake,
            stakeTax: stakeTax.tax,
            taxedStak: stakeTax.taxedStake,
            stakePerOdd: parseFloat(stakePerOdd.toString()),
            winsPerOdd: winsPerOdd,
            minWin: (Math.min.apply(null, winsPerOdd)),
            maxWin: (Math.max.apply(null, winsPerOdd)),
        };
    }
    var getCombinations = function (numberOfSystemPairs) {
        if (!isNaN(numberOfSystemPairs)) {
            var combinations = [];
            for (var i = 1; i <= numberOfSystemPairs; i++) {
                combinations.push(Math.round(
                    Combinatorics.factorial(numberOfSystemPairs) /
                    (Combinatorics.factorial(i) *
                        Combinatorics.factorial(numberOfSystemPairs - i))
                )
                );
            }
            return combinations;
        }
        return 'invalid input';
    }

    var getTotalCombinations = function (numberOfSystemPairs, selectedCombinations) {
        var total = new Big(0);
        var combinations = getCombinations(numberOfSystemPairs);
        for (var i = 0; i < selectedCombinations.length; i++) {
            total = total.plus(combinations[selectedCombinations[i] - 1]);
        }
        return total;
    }


    var setWinType = function (t) {
        if (!isNaN(t)) {
            if (t >= 1 && t <= 2) {
                winType = t;
                return winType;
            }
            return 'invalid win type';
        }
        return 'invalid win type';
    }

    var addRangeTax = function (start, end, tax, type) {
        if (!isNaN(start) && !isNaN(end) && !isNaN(tax)) {
            tax = new Big(tax);
            tax = tax.div(100);
            rangeTax.push({
                start: start,
                end: end,
                tax: tax,
                type: type
            });
            return rangeTax;
        }
        return 'invalid range';
    }

    return {
        calcStandard: calcStandard,
        calcSystem: calcSystem,
        calcSingle: calcSingle,
        getCombinations: getCombinations,
        setWinType: setWinType,
        addRangeTax: addRangeTax,
        calcStakeTax: calcStakeTax,
        getTotalCombinations: getTotalCombinations
    };
}();