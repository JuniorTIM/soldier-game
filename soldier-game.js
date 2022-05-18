const soldier = {
  name: "Джонни",
  health: 10,
  gun: {
    gunName: "m4",
    ammo: 2,
  },
  supplies: 3,

  getStatus: function () {
    return `Имя: ${this.name}, Здоровье: ${this.health}, Оружие: ${this.gun.gunName}, Магазин: ${this.gun.ammo}, Припасы: ${this.supplies}.`;
  },

  shoot: function () {
    if (this.gun.ammo === 0) {
      return "Обойма пуста. Перезарядитесь!";
    } else if (this.gun.ammo <= 30) {
      this.gun.ammo -= 1;
      return "Бах Бах";
    }
  },

  reload: function () {
    if (this.supplies === 0) {
      return "Не осталось припасов.";
    } else if (this.supplies > 0) {
      this.gun.ammo = 30;
      this.supplies -= 1;
      return "Перезарядка...";
    }
  },

  wound: function () {
    if (this.health <= 1) {
      return "Ты проиграл.";
    } else if (this.health > 0) {
      this.health -= 1;
      return "Ранен.";
    }
  },
};
